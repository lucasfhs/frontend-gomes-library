import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CardLoginAdmin() {
  const [userLogin, setuserLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URLAPI = `http://localhost:3000/auth/${userLogin}`;
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URLAPI, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(
          "Falha ao buscar credenciais. Verifique o login e senha."
        );
      }

      const data = await response.json();
      console.log(data);
      // Verifica se o CPF e a senha estão corretos
      if (data.usuarioLogin === userLogin && data.senha === password) {
        alert("Login bem-sucedido!");
        navigate("/user");
      } else {
        alert("Credenciais inválidas!");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <div className="bg-spring-green shadow-lg border-2 border-green-500  p-10 max-w-lg mx-auto aspect-[4/3] flex flex-col gap-8 font-chakraPetch justify-center rounded-md">
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <label className="text-2xl">Usuario</label>
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
