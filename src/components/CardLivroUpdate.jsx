import React, { useState } from "react";

function CardLivroUpdate({ livro, onAlterar, onDeletar }) {
  const [formDados, setFormDados] = useState(livro);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoriaChange = (e) => {
    const { value } = e.target;
    setFormDados((prev) => {
      const categoriasAtuais = prev.categoria || [];
      const novaCategoria = categoriasAtuais.includes(value)
        ? categoriasAtuais.filter((cat) => cat !== value) // Remove se já estiver selecionada
        : [...categoriasAtuais, value]; // Adiciona se não estiver

      return { ...prev, categoria: novaCategoria };
    });
  };

  const handleAlterar = () => {
    onAlterar(livro.id, formDados);
  };

  const handleDeletar = () => {
    onDeletar(livro.id);
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

        {/* Lista de categorias clicáveis */}
        <div className="flex flex-wrap gap-2">
          {["Ficção", "Não-ficção", "Romance", "Fantasia", "Suspense"].map(
            (cat) => (
              <button
                key={cat}
                type="button"
                onClick={handleCategoriaChange}
                value={cat}
                className={`px-3 py-1 rounded-md border ${
                  formDados.categoria.includes(cat)
                    ? "bg-green-500 text-white border-green-700"
                    : "bg-gray-200 text-black border-gray-400"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

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

export default CardLivroUpdate;
