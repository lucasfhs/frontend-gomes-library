import React from "react";
import { Link } from "react-router-dom";
function CardWebsiteAccess() {
  return (
    <div className="h-full flex p-4 sm:p-14 justify-center items-center bg-gray-800">
      <div className="bg-spring-green shadow-lg border-2 border-green-500 p-8 sm:p-10 max-w-lg aspect-[4/3] flex flex-col gap-6 justify-center items-center rounded-lg">
        {/* Título */}
        <h3 className="text-center text-2xl font-semibold text-gray-800">
          Experimente nossos serviços agora mesmo!
        </h3>

        {/* Botões */}
        <div className="flex flex-col gap-4 w-full">
          <Link to="/loginUser">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg shadow-md transition-all duration-200">
              Cliente
            </button>
          </Link>
          <Link to="/loginAdmin">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-lg shadow-md transition-all duration-200">
              Funcionário
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardWebsiteAccess;
