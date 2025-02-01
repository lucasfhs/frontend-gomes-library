import React, { useState } from "react";
import CardLivroUpdate from "./CardLivroUpdate";

function AdminPage() {
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      categoria: ["Ficção"],
      paginas: 112,
      idioma: "Português",
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      categoria: ["Ficção"],
      paginas: 328,
      idioma: "Português",
    },
    {
      id: 3,
      titulo: "Brave New World",
      autor: "Aldous Huxley",
      categoria: ["Ficção"],
      paginas: 288,
      idioma: "Inglês",
    },
    {
      id: 4,
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      categoria: ["Ficção"],
      paginas: 158,
      idioma: "Português",
    },
  ]);

  const [novoLivro, setNovoLivro] = useState({
    titulo: "",
    autor: "",
    categoria: [],
    paginas: "",
    idioma: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoLivro((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoriaChange = (categoria) => {
    setNovoLivro((prev) => {
      const categoriasAtuais = prev.categoria || [];
      const novaCategoria = categoriasAtuais.includes(categoria)
        ? categoriasAtuais.filter((cat) => cat !== categoria) // Remove se já estiver selecionada
        : [...categoriasAtuais, categoria]; // Adiciona se não estiver

      return { ...prev, categoria: novaCategoria };
    });
  };

  const cadastrarLivro = (e) => {
    e.preventDefault();
    if (
      !novoLivro.titulo ||
      !novoLivro.autor ||
      novoLivro.categoria.length === 0
    ) {
      alert("Preencha todos os campos e selecione pelo menos uma categoria.");
      return;
    }

    setLivros((prev) => [...prev, { ...novoLivro, id: prev.length + 1 }]);
    setNovoLivro({
      titulo: "",
      autor: "",
      categoria: [],
      paginas: "",
      idioma: "",
    });
  };

  const alterarLivro = (id, novosDados) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, ...novosDados } : livro
      )
    );
  };

  const deletarLivro = (id) => {
    setLivros((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen">
      {/* Sidebar fixa para cadastro */}
      <aside className="bg-gray-900 border-b-2 lg:border-b-0 lg:border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Cadastrar Novo Livro
        </h2>
        <form className="space-y-4" onSubmit={cadastrarLivro}>
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={novoLivro.titulo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="autor"
            placeholder="Autor"
            value={novoLivro.autor}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />

          {/* Seleção de Categorias */}
          <div className="flex flex-wrap gap-2">
            {["Ficção", "Não-ficção", "Romance", "Fantasia", "Suspense"].map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoriaChange(cat)}
                  className={`px-3 py-1 rounded-md border ${
                    novoLivro.categoria.includes(cat)
                      ? "bg-green-500 text-white border-green-700"
                      : "bg-gray-200 text-black border-gray-400"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <input
            type="number"
            name="paginas"
            placeholder="Páginas"
            value={novoLivro.paginas}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="idioma"
            placeholder="Idioma"
            value={novoLivro.idioma}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 bg-spring-green text-black font-bold rounded-md hover:bg-rich-black transition"
          >
            Cadastrar
          </button>
        </form>
      </aside>

      {/* Região de Scroll com os Cards */}
      <div className="col-span-3 overflow-y-auto p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-white mb-4">Gerenciar Livros</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {livros.map((livro) => (
            <CardLivroUpdate
              key={livro.id}
              livro={livro}
              onAlterar={alterarLivro}
              onDeletar={deletarLivro}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
