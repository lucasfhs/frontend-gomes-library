import React, { useState } from "react";

function CardLibrariesAndBook({ data }) {
  const [formDados, setFormDados] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-rich-black flex justify-between items-start">
      {/* Campos editáveis */}
      <div className="space-y-2 w-3/4">
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
          name="livro"
          value={formDados.livro || "Null"}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Nome do Livro"
        />
        <input
          type="number"
          name="quantidade"
          value={formDados.quantidade}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Quantidade"
        />
      </div>
    </div>
  );
}

export default CardLibrariesAndBook;
