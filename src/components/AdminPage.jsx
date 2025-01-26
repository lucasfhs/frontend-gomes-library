import React, { useState } from "react";
import CardLivroUpdate from "./CardLivroUpdate";

function AdminPage() {
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      categoria: "Ficção",
      paginas: 112,
      idioma: "Português",
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      categoria: "Ficção",
      paginas: 328,
      idioma: "Português",
    },
    {
      id: 3,
      titulo: "Brave New World",
      autor: "Aldous Huxley",
      categoria: "Ficção",
      paginas: 288,
      idioma: "Inglês",
    },
    {
      id: 4,
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      categoria: "Ficção",
      paginas: 158,
      idioma: "Português",
    },
  ]);

  const alterarLivro = (id, novosDados) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, ...novosDados } : livro
      )
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen">
      {/* Sidebar fixa para cadastro (ocupa uma coluna inteira no mobile, 1/4 no desktop) */}
      <aside className="bg-gray-900 border-b-2 lg:border-b-0 lg:border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Cadastrar Novo Livro
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Autor"
            className="w-full p-2 border rounded-md"
          />
          <select className="w-full p-2 border rounded-md">
            <option value="">Categoria</option>
            <option value="Ficção">Ficção</option>
            <option value="Não-ficção">Não-ficção</option>
            <option value="Romance">Romance</option>
          </select>
          <input
            type="number"
            placeholder="Páginas"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Idioma"
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

      {/* Região de Scroll com os Cards (ocupa 3/4 no desktop e toda a largura no mobile) */}
      <div className="col-span-3 overflow-y-auto p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-white mb-4">Gerenciar Livros</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {livros.map((livro) => (
            <CardLivroUpdate
              key={livro.id}
              livro={livro}
              onAlterar={alterarLivro}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
