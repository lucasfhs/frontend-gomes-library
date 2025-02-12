import React, { useEffect, useState } from "react";
import CardEmprestimoUpdate from "./CardEmprestimoUpdate";
import NotificationBar from "./NotificationBar";

function AdminPageEmprestimo() {
  const API_URL = "http://localhost:3000/loan";
  const [emprestimos, setEmprestimos] = useState([]);
  const [notification, setNotification] = useState(null);
  const [novoEmprestimo, setNovoEmprestimo] = useState({
    cpfUser: "",
    idBook: "",
    idLibrary: "",
    dateLoan: "",
    dateReturn: "",
  });

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("tokenAdmin"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setEmprestimos(data);
        showNotification("Empréstimos carregados com sucesso!", "success");
      })
      .catch(() => showNotification("Erro ao carregar empréstimos.", "error"));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEmprestimo((prev) => ({ ...prev, [name]: value }));
  };

  const cadastrarEmprestimo = async (e) => {
    e.preventDefault();
    if (
      !novoEmprestimo.cpfUser ||
      !novoEmprestimo.idBook ||
      !novoEmprestimo.idLibrary ||
      !novoEmprestimo.dateLoan
    ) {
      showNotification("Preencha todos os campos!", "danger");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("tokenAdmin"),
        },
        body: JSON.stringify(novoEmprestimo),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      const { result } = await res.json();
      setEmprestimos((prev) => [...prev, result]); // Atualiza a lista localmente
      setNovoEmprestimo({
        cpfUser: "",
        idBook: "",
        idLibrary: "",
        dateLoan: "",
        dateReturn: "",
      });
      showNotification("Empréstimo cadastrado com sucesso!", "success");
    } catch (error) {
      showNotification(
        "Erro ao cadastrar empréstimo." + error.message,
        "danger"
      );
      console.error("Erro ao cadastrar empréstimo:", error);
    }
  };

  const alterarEmprestimo = async (id, novosDados) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("tokenAdmin"),
        },
        body: JSON.stringify(novosDados),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setEmprestimos((prev) =>
        prev.map((emprestimo) =>
          emprestimo.id === id ? { ...emprestimo, ...novosDados } : emprestimo
        )
      );
      showNotification("Empréstimo alterado com sucesso.", "success");
    } catch (error) {
      showNotification("Erro ao atualizar" + error.message, "danger");
      console.error("Erro ao atualizar empréstimo:", error);
    }
  };

  const deletarEmprestimo = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("tokenAdmin"),
        },
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message);
      }
      setEmprestimos((prev) =>
        prev.filter((emprestimo) => emprestimo.id !== id)
      );
      showNotification("Empréstimo deletado com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao deletar empréstimo:", error);
      showNotification("Erro ao deletar empréstimo.", "danger");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen">
      {/* Sidebar fixa para cadastro */}
      <aside className="bg-gray-900 border-b-2 lg:border-b-0 lg:border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Cadastrar Novo Empréstimo
        </h2>
        <form className="space-y-4" onSubmit={cadastrarEmprestimo}>
          <input
            type="text"
            name="cpfUser"
            placeholder="CPF do Usuário"
            value={novoEmprestimo.cpfUser}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idBook"
            placeholder="ID do Livro"
            value={novoEmprestimo.idBook}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idLibrary"
            placeholder="ID da Biblioteca"
            value={novoEmprestimo.idLibrary}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="date"
            name="dateLoan"
            placeholder="Data de Empréstimo"
            value={novoEmprestimo.dateLoan}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="date"
            name="dateReturn"
            placeholder="Data de Devolução (Opcional)"
            value={novoEmprestimo.dateReturn}
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
        <h1 className="text-2xl font-bold text-white mb-4">
          Gerenciar Empréstimos
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {emprestimos.map((emprestimo) => (
            <CardEmprestimoUpdate
              key={emprestimo.id}
              emprestimo={emprestimo}
              onAlterar={alterarEmprestimo}
              onDeletar={deletarEmprestimo}
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

export default AdminPageEmprestimo;
