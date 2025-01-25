import React from "react";

function Advertising() {
  return (
    <div className="bg-gray-800 text-white h-full flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Título */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center leading-tight max-w-3xl mb-6">
        Biblioteca Gomes: <br />
        <span className="text-spring-green">Abra um livro, abra sua mente</span>
      </h2>

      {/* Espaço reservado para a animação */}
      <div className="w-full max-w-md h-64 sm:h-80 bg-gray-700 rounded-lg flex items-center justify-center shadow-lg">
        <p className="text-gray-400 italic">Animação de um livro em breve...</p>
      </div>
    </div>
  );
}

export default Advertising;
