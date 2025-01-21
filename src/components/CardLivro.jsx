import React, { useState } from "react";
import BibliotecasPopup from "./BibliotecasPopup.jsx";

function CardLivro() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="bg-mint-green p-8 rounded-lg shadow-md max-w-4xl mx-auto border-2 border-rich-black flex items-center justify-between">
      {/* Imagem do Livro */}
      <div className="flex items-center">
        <div className="w-32 h-32 bg-rich-black flex items-center justify-center rounded-md">
          <span className="text-white text-2xl">📚</span>
        </div>
        {/* Informações do Livro */}
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-rich-black mb-2">Título</h2>
          <p className="text-rich-black">
            <strong>Autor:</strong> Nome do Autor
          </p>
          <p className="text-rich-black">
            <strong>Gênero:</strong> Gênero do Livro
          </p>
          <p className="text-rich-black">
            <strong>Páginas:</strong> 300
          </p>
          <p className="text-rich-black">
            <strong>Descrição:</strong> Breve descrição do livro.
          </p>
          <p className="text-rich-black">
            <strong>Quantidade Disponível:</strong> 5
          </p>
        </div>
      </div>

      {/* Botão e Texto para o Popup */}
      <div className="text-right flex flex-col">
        <button
          onClick={openPopup}
          className="text-rich-black underline cursor-pointer hover:text-india-green transition"
        >
          Bibliotecas que Possuem o Livro
        </button>
        <button className="mt-6 py-2 px-6 bg-spring-green text-rich-black text-lg font-bold rounded-full border-2 border-rich-black hover:bg-india-green transition">
          Desejo Alugar !
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && <BibliotecasPopup onClose={closePopup} />}
    </div>
  );
}

export default CardLivro;
