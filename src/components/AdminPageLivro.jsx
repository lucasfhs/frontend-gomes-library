import React, { useEffect, useState } from "react";
import CardLivroUpdate from "./CardLivroUpdate";
import NotificationBar from "./NotificationBar";

function AdminPage() {
  const API_URL = "http://localhost:3000/book";
  const [livros, setLivros] = useState([]);
  const [notification, setNotification] = useState(null);
  const [novoLivro, setNovoLivro] = useState({
    title: "",
    author: "",
    category: [],
    price: "",
    pages: "",
    language: "",
  });
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  // 🔹 Buscar livros da API ao carregar a página
  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setLivros(data);
        showNotification("Livros carregados com sucesso!", "success");
      })
      .catch(() => showNotification("Erro ao carregar livros.", "error"));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoLivro((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoriaChange = (categoria) => {
    setNovoLivro((prev) => {
      const categoriasAtuais = prev.category || [];
      const novaCategoria = categoriasAtuais.includes(categoria)
        ? categoriasAtuais.filter((cat) => cat !== categoria)
        : [...categoriasAtuais, categoria];

      return { ...prev, category: novaCategoria };
    });
  };

  // 🔹 Cadastrar livro na API
  const cadastrarLivro = async (e) => {
    e.preventDefault();
    if (
      !novoLivro.title ||
      !novoLivro.author ||
      novoLivro.category.length === 0
    ) {
      showNotification("Preencha todos os campos", "danger");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
        },
        body: JSON.stringify(novoLivro),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      const { result } = await res.json();
      setLivros((prev) => [...prev, result]); // Atualiza a lista localmente
      setNovoLivro({
        title: "",
        author: "",
        category: [],
        pages: "",
        price: "",
        language: "",
      });
      showNotification("Livro cadastrado com sucesso!", "success");
    } catch (error) {
      showNotification("Erro ao cadastrar livro." + error.message, "danger");
      console.error("Erro ao cadastrar livro:", error);
    }
  };

  // 🔹 Atualizar livro na API
  const alterarLivro = async (id, novosDados) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
        },
        body: JSON.stringify(novosDados),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setLivros((prev) =>
        prev.map((livro) =>
          livro.id === id ? { ...livro, ...novosDados } : livro
        )
      );
      showNotification("Livro alterado com sucesso.", "success");
    } catch (error) {
      showNotification("Erro ao atualizar" + error.message, "danger");
      console.error("Erro ao atualizar livro:", error);
    }
  };

  // 🔹 Deletar livro da API
  const deletarLivro = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
        },
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setLivros((prev) => prev.filter((livro) => livro.id !== id));
      showNotification("Livro deletado com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
      showNotification("Erro ao deletar livro", "danger");
    }
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
            name="title"
            placeholder="Título"
            value={novoLivro.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            value={novoLivro.author}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />

          {/* Seleção de Categorias */}
          <div className="flex flex-wrap gap-2">
            {[
              "Ficção",
              "Não-ficção",
              "Romance",
              "Biografia",
              "Fantasia",
              "Ciência",
              "História",
              "Terror",
              "Infantil",
              "Aventura",
              "Suspense",
              "Autoajuda",
              "Religioso",
            ].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoriaChange(cat)}
                className={`px-3 py-1 rounded-md border ${
                  novoLivro.category.includes(cat)
                    ? "bg-green-500 text-white border-green-700"
                    : "bg-gray-200 text-black border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="number"
            name="pages"
            placeholder="Páginas"
            value={novoLivro.pages}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="1"
          />
          <input
            type="text"
            name="language"
            placeholder="Idioma"
            value={novoLivro.language}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="price"
            placeholder="Preço"
            value={novoLivro.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="1"
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
          {Array.isArray(livros) &&
            livros.map((livro) => (
              <CardLivroUpdate
                key={livro.id}
                livro={livro}
                onAlterar={alterarLivro}
                onDeletar={deletarLivro}
              />
            ))}
        </div>
      </div>
      {notification && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default AdminPage;
