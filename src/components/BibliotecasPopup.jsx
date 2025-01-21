import React from "react";

function BibliotecasPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-lg">
        <h3 className="text-2xl font-bold text-rich-black mb-4">
          Bibliotecas que Possuem o Livro
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-rich-black">Biblioteca 1</li>
          <li className="text-rich-black">Biblioteca 2</li>
          <li className="text-rich-black">Biblioteca 3</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-spring-green text-rich-black font-bold rounded-md hover:bg-india-green transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default BibliotecasPopup;
