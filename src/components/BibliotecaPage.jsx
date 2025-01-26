import React, { useState } from "react";
import CardBibliotecaUpdate from "./CardBibliotecaUpdate";

function BibliotecaPage() {
  const [dadosBiblioteca, setDadosBiblioteca] = useState([
    {
      id: 1,
      idLivro: 1,
      idBiblioteca: 1,
      tituloLivro: "A Revolução dos Bichos",
      nomeBiblioteca: "Biblioteca Central",
      quantidadeDisponivel: 10,
    },
    {
      id: 2,
      idLivro: 2,
      idBiblioteca: 1,
      tituloLivro: "1984",
      nomeBiblioteca: "Biblioteca Central",
      quantidadeDisponivel: 5,
    },
  ]);

  const alterarDadoBiblioteca = (id, novosDados) => {
    setDadosBiblioteca((prevDados) =>
      prevDados.map((dado) =>
        dado.id === id ? { ...dado, ...novosDados } : dado
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar fixa para Adicionar Novos Dados */}
      <aside className="lg:w-1/4 bg-gray-900 border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Adicionar Livro à Biblioteca
        </h2>
        <form className="space-y-4">
          <input
            type="number"
            placeholder="ID Livro"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="ID Biblioteca"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Quantidade Disponível"
            className="w-full p-2 border rounded-md"
            min={0}
          />
          <button
            type="submit"
            className="w-full py-2 bg-spring-green text-black font-bold rounded-md hover:bg-rich-black transition"
          >
            Adicionar
          </button>
        </form>
      </aside>
      {/* Região de Scroll com os Dados */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-white mb-4">
          Gerenciar Livros por Biblioteca
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dadosBiblioteca.map((dado) => (
            <CardBibliotecaUpdate
              key={dado.id}
              dado={dado}
              onAlterar={alterarDadoBiblioteca}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BibliotecaPage;
