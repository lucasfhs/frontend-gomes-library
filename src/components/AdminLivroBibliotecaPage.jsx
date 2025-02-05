import React, { useEffect, useState } from "react";
import NotificationBar from "./NotificationBar";
import CardLivroBibliotecaUpdate from "./CardLivroBibliotecaUpdate";

function AdminLivroBibliotecaPage() {
  const API_URL = "http://localhost:3000/bookLibrary";
  const [livrosBiblioteca, setLivrosBiblioteca] = useState([]);
  const [notification, setNotification] = useState(null);
  const [novoRegistro, setNovoRegistro] = useState({
    id: "",
    idBook: "",
    idLibrary: "",
    amount: "",
  });
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODczMDA3OSwiZXhwIjoxNzM5MzM0ODc5fQ.xegjO8dv1UnNdDRECgtyoxYJ9Ao4YrhXUgd8XZeq05I",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setLivrosBiblioteca(data);
        showNotification(
          "Relação Livros-Biblioteca carregadas com sucesso!",
          "success"
        );
      })
      .catch(() =>
        showNotification("Erro ao carregar relação Livros-Biblioteca.", "error")
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro((prev) => ({ ...prev, [name]: value }));
  };

  const cadastrarRegistro = async (e) => {
    e.preventDefault();
    if (
      !novoRegistro.idBook ||
      !novoRegistro.idLibrary ||
      !novoRegistro.amount
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODczMDA3OSwiZXhwIjoxNzM5MzM0ODc5fQ.xegjO8dv1UnNdDRECgtyoxYJ9Ao4YrhXUgd8XZeq05I",
        },
        body: JSON.stringify(novoRegistro),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      const { result } = await res.json();
      setLivrosBiblioteca((prev) => [...prev, result]); // Atualiza a lista localmente
      setNovoRegistro({
        idBook: "",
        idLibrary: "",
        amount: "",
      });
      showNotification("Relação Livros-Biblioteca com sucesso!", "success");
    } catch (error) {
      showNotification(
        "Erro ao relação livros-biblioteca." + error.message,
        "danger"
      );
      console.error("Erro ao cadastrar relação livros-biblioteca:", error);
    }
  };

  // 🔹 Atualizar livro na API
  const alterarRegistro = async (id, novosDados) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODczMDA3OSwiZXhwIjoxNzM5MzM0ODc5fQ.xegjO8dv1UnNdDRECgtyoxYJ9Ao4YrhXUgd8XZeq05I",
        },
        body: JSON.stringify(novosDados),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setLivrosBiblioteca((prev) =>
        prev.map((livrosBiblioteca) =>
          livrosBiblioteca.id === id
            ? { ...livrosBiblioteca, ...novosDados }
            : livrosBiblioteca
        )
      );
      showNotification(
        "Relacao livro-biblioteca alterado com sucesso.",
        "success"
      );
    } catch (error) {
      showNotification("Erro ao atualizar" + error.message, "danger");
      console.error("Erro ao atualizar relacao livro-biblioteca:", error);
    }
  };

  const deletarRegistro = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODczMDA3OSwiZXhwIjoxNzM5MzM0ODc5fQ.xegjO8dv1UnNdDRECgtyoxYJ9Ao4YrhXUgd8XZeq05I",
        },
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setLivrosBiblioteca((prev) =>
        prev.filter((livrosBiblioteca) => livrosBiblioteca.id !== id)
      );
      showNotification("Livro deletado com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao deletar relação livro-biblioteca:", error);
      showNotification("Erro ao deletar relação livro-biblioteca", "danger");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen">
      {/* Sidebar fixa para cadastro */}
      <aside className="bg-gray-900 border-b-2 lg:border-b-0 lg:border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Cadastrar Novo Registro
        </h2>
        <form className="space-y-4" onSubmit={cadastrarRegistro}>
          <input
            type="number"
            name="idBook"
            placeholder="ID do Livro"
            value={novoRegistro.idBook}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idLibrary"
            placeholder="ID da Biblioteca"
            value={novoRegistro.idLibrary}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="amount"
            placeholder="Quantidade Disponível"
            value={novoRegistro.amount}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
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
        <h1 className="text-2xl font-bold text-white mb-4">
          Gerenciar Relações Livro-Biblioteca
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {livrosBiblioteca.map((livrosBiblioteca) => (
            <CardLivroBibliotecaUpdate
              key={livrosBiblioteca.id}
              livroBiblioteca={livrosBiblioteca}
              onAlterar={alterarRegistro}
              onDeletar={deletarRegistro}
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

export default AdminLivroBibliotecaPage;
