import React, { useState } from "react";

function CardEmprestimoUpdate({ emprestimo, onAlterar, onDeletar }) {
  const [formDados, setFormDados] = useState(emprestimo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleAlterar = () => {
    onAlterar(emprestimo.id, formDados);
  };

  const handleDeletar = () => {
    onDeletar(emprestimo.id);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-rich-black flex justify-between items-start">
      {/* Campos editáveis */}
      <div className="space-y-2 w-3/4">
        <input
          type="text"
          name="cpfUsuario"
          value={formDados.cpfUsuario}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="CPF do Usuário"
        />
        <input
          type="number"
          name="idLivro"
          value={formDados.idLivro}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="ID do Livro"
        />
        <input
          type="number"
          name="idBiblioteca"
          value={formDados.idBiblioteca}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="ID da Biblioteca"
        />
        <input
          type="date"
          name="dataEmprestimo"
          value={formDados.dataEmprestimo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="date"
          name="dataDevolucao"
          value={formDados.dataDevolucao || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Botões de Alterar e Deletar */}
      <div className="ml-4 flex flex-col space-y-2">
        <button
          onClick={handleAlterar}
          className="py-2 px-6 bg-spring-green text-rich-black font-bold rounded-md border-2 border-rich-black hover:bg-india-green transition"
        >
          Alterar
        </button>
        <button
          onClick={handleDeletar}
          className="py-2 px-6 bg-red-500 text-white font-bold rounded-md border-2 border-red-700 hover:bg-red-700 transition"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}

export default CardEmprestimoUpdate;
