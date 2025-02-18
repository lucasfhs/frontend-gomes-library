import { useState } from "react";
import BibliotecasPopup from "./BibliotecasPopup.jsx";
import AlugarPopup from "./AlugarPopup.jsx";
function CardLivro({ livro }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAlugarPopupOpen, setIsAlugarPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="bg-mint-green p-6 rounded-lg shadow-md border-2 border-rich-black flex flex-col sm:flex-row items-center justify-between">
      {/* Imagem do Livro */}
      <div className="flex items-center">
        <div className="w-32 h-32 bg-rich-black flex items-center justify-center rounded-md">
          {livro.img_url ? (
            <img
              src={livro.img_url}
              alt=""
              srcset=""
              className="w-full h-full object-fill border-2 border-rich-black rounded"
            />
          ) : (
            <span className="text-white text-2xl">📚</span>
          )}
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
            <strong>Quantidade Disponível:</strong>{" "}
            {livro.quantidade_disponivel}
          </p>
          <p className="text-rich-black">
            <strong>Preço(Aluguel):</strong> {livro.preco}
          </p>

          {/* Lista de Categorias */}
          <p className="text-rich-black">
            <strong>Categorias:</strong>{" "}
            {Array.isArray(livro.categoria) ? livro.categoria.join(", ") : ""}
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="text-right flex flex-col">
        <button
          onClick={openPopup}
          className="text-rich-black text-md font-publicSans underline cursor-pointer mt-2 hover:text-india-green transition"
        >
          Bibliotecas que Possuem o Livro
        </button>
        {/* Botão de Alugar ou Esgotado */}
        {livro.quantidade_disponivel > 0 ? (
          <button
            onClick={() => setIsAlugarPopupOpen(true)}
            className="mt-6 py-2 px-6 bg-spring-green text-rich-black text-lg font-bold rounded-full border-2 border-rich-black hover:bg-india-green transition"
          >
            Alugar
          </button>
        ) : (
          <button
            className="mt-6 py-2 px-6 bg-red-500 text-white text-lg font-bold rounded-full border-2 border-rich-black cursor-not-allowed"
            disabled
          >
            Esgotado
          </button>
        )}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <BibliotecasPopup livroId={livro.id} onClose={closePopup} />
      )}
      {isAlugarPopupOpen && (
        <AlugarPopup
          livroId={livro.id}
          onClose={() => setIsAlugarPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default CardLivro;
