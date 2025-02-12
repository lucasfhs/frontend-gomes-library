import { useState } from "react";
const URLAPI = "http://localhost:3000/auth";
import NotificationBar from "./NotificationBar";
function CardCadastroAdmin() {
  const [notification, setNotification] = useState(null);
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  const [formData, setFormData] = useState({
    userLogin: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URLAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta da API:", data);
      showNotification("Cadastro enviado com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao enviar o cadastro:", error);
      showNotification("Ocorreu um erro ao enviar o cadastro.");
    }
  };

  return (
    <div className="bg-white p-10 shadow-md rounded-lg max-w-lg mx-auto border-2 border-rich-black">
      <h2 className="text-center text-3xl font-bold text-black mb-6">
        Cadastro (Operador)
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-rich-black font-semibold">Usuario</label>
          <input
            type="text"
            name="userLogin"
            value={formData.userLogin}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-spring-green text-rich-black text-xl font-bold rounded-lg hover:bg-india-green transition"
        >
          Enviar
        </button>
      </form>
      {notification && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default CardCadastroAdmin;
