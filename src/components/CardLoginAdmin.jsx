import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CardLoginAdmin() {
  const [userLogin, setuserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/loginAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userLogin, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("tokenAdmin", data.result);
        navigate("/admin/book");
      } else {
        setErrorMessage(data.message || "Credenciais inválidas!");
      }
    } catch (error) {
      setErrorMessage("Erro ao conectar com o servidor. Tente novamente.");
    }
  };

  return (
    <div className="bg-spring-green shadow-lg border-2 border-green-500 p-10 max-w-lg mx-auto aspect-[4/3] flex flex-col gap-8 font-chakraPetch justify-center rounded-md">
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <label className="text-2xl">Usuário</label>
        <input
          type="text"
          className="bg-white rounded-lg block w-full border border-black"
          value={userLogin}
          onChange={(e) => setuserLogin(e.target.value)}
        />
        <label className="text-2xl">Senha</label>
        <input
          type="password"
          className="bg-white rounded-lg block w-full border border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex items-center justify-between mt-6">
          <Link to="/registerAdmin">
            <button type="button" className="underline text-sm">
              Não possuo cadastro
            </button>
          </Link>
          <button type="button" className="underline text-sm">
            Preciso de ajuda
          </button>
        </div>
        <button
          type="submit"
          className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all py-2 px-4 rounded-lg"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default CardLoginAdmin;
