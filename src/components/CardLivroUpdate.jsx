import React, { useState } from "react";

function CardLivroUpdate({ livro, onAlterar }) {
  const [formDados, setFormDados] = useState(livro);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleAlterar = () => {
    onAlterar(livro.id, formDados);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-rich-black flex justify-between items-start">
      {/* Campos editáveis */}
      <div className="space-y-2 w-3/4">
        <input
          type="text"
          name="titulo"
          value={formDados.titulo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="autor"
          value={formDados.autor}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
        <select
          name="categoria"
          value={formDados.categoria}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="Ficção">Ficção</option>
          <option value="Não-ficção">Não-ficção</option>
          <option value="Romance">Romance</option>
        </select>
        <input
          type="number"
          name="paginas"
          value={formDados.paginas}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="idioma"
          value={formDados.idioma}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Botão Alterar */}
      <button
        onClick={handleAlterar}
        className="ml-4 py-2 px-6 bg-spring-green text-rich-black font-bold rounded-md border-2 border-rich-black hover:bg-india-green transition"
      >
        Alterar
      </button>
    </div>
  );
}

export default CardLivroUpdate;
