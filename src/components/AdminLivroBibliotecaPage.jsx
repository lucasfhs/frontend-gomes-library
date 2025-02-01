import React, { useState } from "react";
import CardLivroBibliotecaUpdate from "./CardLivroBibliotecaUpdate";

function AdminLivroBibliotecaPage() {
  const [livrosBiblioteca, setLivrosBiblioteca] = useState([
    { id: 1, idLivro: 101, idBiblioteca: 1, quantidadeDisponivel: 5 },
    { id: 2, idLivro: 102, idBiblioteca: 2, quantidadeDisponivel: 3 },
    { id: 3, idLivro: 103, idBiblioteca: 1, quantidadeDisponivel: 7 },
    { id: 4, idLivro: 104, idBiblioteca: 3, quantidadeDisponivel: 2 },
  ]);

  const [novoRegistro, setNovoRegistro] = useState({
    idLivro: "",
    idBiblioteca: "",
    quantidadeDisponivel: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro((prev) => ({ ...prev, [name]: value }));
  };

  const cadastrarRegistro = (e) => {
    e.preventDefault();
    if (
      !novoRegistro.idLivro ||
      !novoRegistro.idBiblioteca ||
      novoRegistro.quantidadeDisponivel === ""
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    setLivrosBiblioteca((prev) => [
      ...prev,
      { ...novoRegistro, id: prev.length + 1 },
    ]);
    setNovoRegistro({
      idLivro: "",
      idBiblioteca: "",
      quantidadeDisponivel: "",
    });
  };

  const alterarRegistro = (id, novosDados) => {
    setLivrosBiblioteca((prev) =>
      prev.map((registro) =>
        registro.id === id ? { ...registro, ...novosDados } : registro
      )
    );
  };

  const deletarRegistro = (id) => {
    setLivrosBiblioteca((prev) =>
      prev.filter((registro) => registro.id !== id)
    );
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
            name="idLivro"
            placeholder="ID do Livro"
            value={novoRegistro.idLivro}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="idBiblioteca"
            placeholder="ID da Biblioteca"
            value={novoRegistro.idBiblioteca}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="quantidadeDisponivel"
            placeholder="Quantidade Disponível"
            value={novoRegistro.quantidadeDisponivel}
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
          {livrosBiblioteca.map((registro) => (
            <CardLivroBibliotecaUpdate
              key={registro.id}
              livroBiblioteca={registro}
              onAlterar={alterarRegistro}
              onDeletar={deletarRegistro}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminLivroBibliotecaPage;
