import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-2">Página não encontrada!</p>
      <p className="text-sm text-gray-400">
        A página que você procura não existe.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 py-2 px-6 bg-green-500 text-white font-bold rounded-md border hover:bg-green-700 transition"
      >
        Voltar para Home
      </button>
    </div>
  );
}

export default ErrorPage;
