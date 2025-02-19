import React, { useState } from "react";

function CardHighAvailabilityCatalog({ data }) {
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
          name="titulo"
          value={formDados.titulo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Título do Livro"
        />
        <input
          type="text"
          name="autor"
          value={formDados.autor}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Autor"
        />
        <input
          type="text"
          name="categoria"
          value={formDados.categoria.join(", ")}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Categoria"
        />
        <input
          type="number"
          name="paginas"
          value={formDados.paginas}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Número de Páginas"
        />
        <input
          type="text"
          name="preco"
          value={formDados.preco}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Preço"
        />
        <input
          type="text"
          name="idioma"
          value={formDados.idioma}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Idioma"
        />
        <input
          type="number"
          name="quantidade_disponivel"
          value={formDados.quantidade_disponivel}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder="Quantidade Disponível"
        />
      </div>
    </div>
  );
}

export default CardHighAvailabilityCatalog;
