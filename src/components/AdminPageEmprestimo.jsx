import React, { useState } from "react";
import CardEmprestimoUpdate from "./CardEmprestimoUpdate";

function AdminPageEmprestimos() {
  const [emprestimos, setEmprestimos] = useState([
    {
      id: 1,
      cpfUsuario: "12345678901",
      idLivro: 2,
      idBiblioteca: 1,
      dataEmprestimo: "2024-02-01",
      dataDevolucao: "",
    },
    {
      id: 2,
      cpfUsuario: "98765432100",
      idLivro: 3,
      idBiblioteca: 2,
      dataEmprestimo: "2024-01-25",
      dataDevolucao: "2024-02-05",
    },
  ]);

  const [novoEmprestimo, setNovoEmprestimo] = useState({
    cpfUsuario: "",
    idLivro: "",
    idBiblioteca: "",
    dataEmprestimo: "",
    dataDevolucao: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEmprestimo((prev) => ({ ...prev, [name]: value }));
  };

  const cadastrarEmprestimo = (e) => {
    e.preventDefault();
    if (
      !novoEmprestimo.cpfUsuario ||
      !novoEmprestimo.idLivro ||
      !novoEmprestimo.idBiblioteca ||
      !novoEmprestimo.dataEmprestimo
    ) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    setEmprestimos((prev) => [
      ...prev,
      { ...novoEmprestimo, id: prev.length + 1 },
    ]);
    setNovoEmprestimo({
      cpfUsuario: "",
      idLivro: "",
      idBiblioteca: "",
      dataEmprestimo: "",
      dataDevolucao: "",
    });
  };

  const alterarEmprestimo = (id, novosDados) => {
    setEmprestimos((prev) =>
      prev.map((emprestimo) =>
        emprestimo.id === id ? { ...emprestimo, ...novosDados } : emprestimo
      )
    );
  };

  const deletarEmprestimo = (id) => {
    setEmprestimos((prev) => prev.filter((emprestimo) => emprestimo.id !== id));
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
            name="cpfUsuario"
            placeholder="CPF do Usuário"
            value={novoEmprestimo.cpfUsuario}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idLivro"
            placeholder="ID do Livro"
            value={novoEmprestimo.idLivro}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idBiblioteca"
            placeholder="ID da Biblioteca"
            value={novoEmprestimo.idBiblioteca}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="date"
            name="dataEmprestimo"
            placeholder="Data de Empréstimo"
            value={novoEmprestimo.dataEmprestimo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="date"
            name="dataDevolucao"
            placeholder="Data de Devolução (Opcional)"
            value={novoEmprestimo.dataDevolucao}
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
    </div>
  );
}

export default AdminPageEmprestimos;
