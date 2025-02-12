import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CardLoginUser() {
  const [cpfUser, setCpfUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
        setErrorMessage(
          data.message || "Falha ao autenticar. Verifique seus dados."
        );
      }
    } catch (error) {
      setErrorMessage(
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
          className="bg-white rounded-lg block w-full border border-black"
          value={cpfUser}
          onChange={(e) => setCpfUser(e.target.value)}
        />
        <label className="text-2xl">Senha</label>
        <input
          type="password"
          className="bg-white rounded-lg block w-full border border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between mt-6">
          <Link to="/registerUser" className="underline text-sm">
            Não possuo cadastro
          </Link>
          <button className="underline text-sm">Preciso de ajuda</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        onClick={handleLogin}
        className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all py-2 px-4 rounded-lg"
      >
        Entrar
      </button>
    </div>
  );
}

export default CardLoginUser;
