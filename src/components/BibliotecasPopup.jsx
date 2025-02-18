import React, { useEffect, useState } from "react";

function BibliotecasPopup({ onClose, livroId }) {
  const [bibliotecas, setBibliotecas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!livroId) return;
    setLoading(true);
    let API_URL = `http://localhost:3000/report/getBookAvailability/${livroId}`;
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("tokenUser"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBibliotecas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar bibliotecas:", error);
        setLoading(false);
      });
  }, [livroId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-lg">
        <h3 className="text-2xl font-bold text-rich-black mb-4">
          📚 Bibliotecas com este livro
        </h3>

        {loading ? (
          <p className="text-rich-black">Carregando...</p>
        ) : bibliotecas.length > 0 ? (
          <ul className="max-h-60 overflow-y-auto space-y-2 border p-3 rounded-md">
            {bibliotecas.map((biblioteca) => (
              <li
                key={biblioteca.id}
                className="text-rich-black flex justify-between border-b pb-2"
              >
                <span>{biblioteca.biblioteca}</span>
                <span className="font-bold">
                  {biblioteca.quantidade} disponíveis
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-600 font-bold">
            Nenhuma biblioteca encontrada.
          </p>
        )}

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
