import React, { useState } from "react";

function formatDateToInput(dateStr) {
  if (!dateStr) return ""; // Retorna string vazia para evitar erro

  const parts = dateStr.split("/"); // Divide "DD/MM/YYYY"
  if (parts.length !== 3) return ""; // Caso inesperado

  return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna "YYYY-MM-DD"
}

function formatDateToDisplay(dateStr) {
  if (!dateStr) return "";

  const parts = dateStr.split("-");
  if (parts.length !== 3) return "";

  return `${parts[2]}/${parts[1]}/${parts[0]}`; // Retorna "DD/MM/YYYY"
}

function CardMatureCustomers({ data }) {
  const [formDados, setFormDados] = useState({
    ...data,
    emprestimo: formatDateToInput(data.emprestimo),
    devolucao: formatDateToInput(data.devolucao), // Converte null para ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormDados((prev) => ({
      ...prev,
      [name]: value, // Mantemos "YYYY-MM-DD" no estado para evitar problemas
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-rich-black flex justify-between items-start">
      <div className="space-y-2 w-3/4">
        <input
          type="text"
          name="livro"
          value={formDados.livro}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Nome do Livro"
        />
        <input
          type="text"
          name="biblioteca"
          value={formDados.biblioteca}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Nome da Biblioteca"
        />
        <input
          type="text"
          name="usuario"
          value={formDados.usuario}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Nome do Usuário"
        />
        <input
          type="date"
          name="emprestimo"
          value={formDados.emprestimo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="date"
          name="devolucao"
          value={formDados.devolucao}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
}

export default CardMatureCustomers;
