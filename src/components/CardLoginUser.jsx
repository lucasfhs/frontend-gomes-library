import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NotificationBar from "./NotificationBar";
function CardLoginUser() {
  const [cpfUser, setCpfUser] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpfUser, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("tokenUser", data.result);
        navigate("/user/book");
      } else {
        showNotification(
          data.message || "Falha ao autenticar. Verifique seus dados."
        );
      }
    } catch (error) {
      showNotification(
        "Erro ao conectar com o servidor. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="bg-spring-green shadow-lg border-2 border-green-500 p-10 max-w-lg mx-auto aspect-[4/3] flex flex-col gap-8 font-chakraPetch justify-center rounded-md">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-2xl">CPF</label>
        <input
          type="text"
          className="bg-white rounded-lg p-2 block w-full border border-black"
          value={cpfUser}
          onChange={(e) => setCpfUser(e.target.value)}
        />
        <label className="text-2xl">Senha</label>
        <input
          type="password"
          className="bg-white rounded-lg p-2 block w-full border border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between mt-6">
          <Link
            to="/registerUser"
            className="underline text-sm font-publicSans"
          >
            Não possuo cadastro
          </Link>
          <button className="underline text-sm font-publicSans">
            Preciso de ajuda
          </button>
        </div>
      </form>

      <button
        onClick={handleLogin}
        className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all py-2 px-4 rounded-lg"
      >
        Entrar
      </button>
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

export default CardLoginUser;
