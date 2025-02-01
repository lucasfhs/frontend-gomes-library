import { useState } from "react";
import BibliotecasPopup from "./BibliotecasPopup.jsx";

function CardLivro({ livro }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleAlugar = () => {
    const sucesso = Math.random() > 0.5; // Simulação (substituir por chamada real à API)
    alert(
      sucesso ? "📖 Livro alugado com sucesso!" : "❌ Falha ao alugar o livro."
    );
  };

  return (
    <div className="bg-mint-green p-6 rounded-lg shadow-md border-2 border-rich-black flex items-center justify-between">
      {/* Imagem do Livro */}
      <div className="flex items-center">
        <div className="w-32 h-32 bg-rich-black flex items-center justify-center rounded-md">
          <span className="text-white text-2xl">📚</span>
        </div>
        {/* Informações do Livro */}
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-rich-black mb-2">
            {livro.titulo}
          </h2>
          <p className="text-rich-black">
            <strong>Autor:</strong> {livro.autor}
          </p>
          <p className="text-rich-black">
            <strong>Idioma:</strong> {livro.idioma}
          </p>
          <p className="text-rich-black">
            <strong>Páginas:</strong> {livro.paginas}
          </p>
          <p className="text-rich-black">
            <strong>Quantidade Disponível:</strong> {livro.quantidade}
          </p>

          {/* Lista de Categorias */}
          <p className="text-rich-black">
            <strong>Categorias:</strong> {livro.categorias.join(", ")}
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="text-right flex flex-col">
        <button
          onClick={openPopup}
          className="text-rich-black underline cursor-pointer hover:text-india-green transition"
        >
          Bibliotecas que Possuem o Livro
        </button>
        <button
          onClick={handleAlugar}
          className="mt-6 py-2 px-6 bg-spring-green text-rich-black text-lg font-bold rounded-full border-2 border-rich-black hover:bg-india-green transition"
        >
          Desejo Alugar !
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <BibliotecasPopup livroId={livro.id} onClose={closePopup} />
      )}
    </div>
  );
}

export default CardLivro;
