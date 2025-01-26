import React, { useState } from "react";

function CardBibliotecaUpdate({ dado, onAlterar }) {
  const [editando, setEditando] = useState(false);
  const [quantidade, setQuantidade] = useState(dado.quantidadeDisponivel);

  const handleSalvar = () => {
    onAlterar(dado.id, { quantidadeDisponivel: quantidade });
    setEditando(false);
  };

  const handleIncrementar = () => {
    setQuantidade((prev) => prev + 1);
  };

  const handleDecrementar = () => {
    setQuantidade((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md text-white space-y-2 flex flex-col gap-4">
      <div>
        <div className="">
          <label htmlFor="nomeBiblioteca" className="font-semibold">
            Biblioteca:
          </label>
          <input
            type="text"
            name="nomeBiblioteca"
            value={dado.nomeBiblioteca}
            readOnly
            className="w-full p-2 border rounded-md"
          />

          <label htmlFor="idLivro" className="font-semibold">
            ID Livro:
          </label>
          <input
            type="text"
            name="idLivro"
            value={dado.idLivro}
            readOnly
            className="w-full p-2 border rounded-md"
          />

          <label htmlFor="idBiblioteca" className="font-semibold">
            ID Biblioteca:
          </label>
          <input
            type="text"
            name="idBiblioteca"
            value={dado.idBiblioteca}
            readOnly
            className="w-full p-2 border rounded-md"
          />

          <label htmlFor="quantidadeDisponivel" className="font-semibold">
            Quantidade Disponível:
          </label>
          <input
            type="text"
            name="quantidadeDisponivel"
            value={dado.quantidadeDisponivel}
            readOnly
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {editando ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrementar}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
            >
              -
            </button>
            <input
              type="number"
              value={quantidade}
              min={0}
              onChange={(e) => setQuantidade(parseInt(e.target.value, 10) || 0)}
              className="w-20 text-center p-2 border rounded-md bg-gray-700 text-white"
            />
            <button
              onClick={handleIncrementar}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
            >
              +
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSalvar}
              className="flex-1 py-2 bg-spring-green text-black font-bold rounded-md hover:bg-rich-black transition"
            >
              Salvar
            </button>
            <button
              onClick={() => setEditando(false)}
              className="flex-1 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setEditando(true)}
          className="py-2 bg-spring-green text-black font-bold rounded-md hover:bg-rich-black transition"
        >
          Alterar
        </button>
      )}
    </div>
  );
}

export default CardBibliotecaUpdate;
