import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function AlugarPopup({ livroId, onClose }) {
  const [bibliotecas, setBibliotecas] = useState([]);
  const [selectedBiblioteca, setSelectedBiblioteca] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reservaFeita, setReservaFeita] = useState(false);

  const token = sessionStorage.getItem("tokenUser");
  const cpfUser = jwtDecode(token).cpfUser;

  useEffect(() => {
    if (!livroId || !cpfUser) return;
    setLoading(true);

    fetch(`http://localhost:3000/report/getBookAvailability/${livroId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
  }, [livroId, cpfUser]);

  const handleReservar = () => {
    if (!selectedBiblioteca) {
      alert("Selecione uma biblioteca antes de reservar!");
      return;
    }

    const getDate = () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    fetch("http://localhost:3000/loan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        cpfUser: cpfUser,
        idBook: livroId,
        idLibrary: selectedBiblioteca.id,
        dateLoan: getDate(),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setReservaFeita(true);
      })
      .catch((error) => {
        console.error("Erro ao reservar livro:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-md w-11/12 shadow-2xl transition transform scale-105">
        <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
          📖 Reservar Livro
        </h3>

        {loading ? (
          <p className="text-green-700">Carregando bibliotecas...</p>
        ) : reservaFeita ? (
          <p className="text-green-600 font-bold text-center">
            ✅ Tudo pronto!
          </p>
        ) : (
          <>
            {bibliotecas.length > 0 ? (
              <ul className="max-h-60 overflow-y-auto space-y-2 border p-3 rounded-lg bg-green-50">
                {bibliotecas.map((biblioteca) => (
                  <li
                    key={biblioteca.id}
                    className={`flex items-center justify-between p-2 cursor-pointer transition ${
                      selectedBiblioteca?.id === biblioteca.id
                        ? "bg-green-200 shadow-md"
                        : "hover:bg-green-100"
                    }`}
                    onClick={() => setSelectedBiblioteca(biblioteca)}
                  >
                    <span className="font-bold text-green-900">
                      {biblioteca.biblioteca}
                    </span>
                    <input
                      type="checkbox"
                      checked={selectedBiblioteca?.id === biblioteca.id}
                      readOnly
                      className="w-5 h-5 accent-green-600"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-600 font-bold text-center">
                Nenhuma biblioteca disponível.
              </p>
            )}

            {selectedBiblioteca && (
              <button
                onClick={handleReservar}
                className="mt-4 w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
              >
                Reservar nesta Biblioteca
              </button>
            )}
          </>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default AlugarPopup;
