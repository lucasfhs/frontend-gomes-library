import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams(); // Extrai o parâmetro 'id' diretamente do objeto retornado por useParams
  const navigate = useNavigate();
  function clicouBotao() {
    console.log("Clicou memo");
    return navigate("/");
  }
  return (
    <div>
      <h1>ContactDetails</h1>
      <p>Oi, eu sou o id {id}</p>
      <button
        onClick={clicouBotao}
        className="p-6 text-3xl border text-red-700 hover:text-black transition-all text-center"
      >
        Voltar para a Home
      </button>
    </div>
  );
};

export default ContactDetails;
