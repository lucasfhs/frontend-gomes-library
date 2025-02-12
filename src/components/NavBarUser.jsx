import { BookCheck, User, LogOut, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function NavBarUser() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [userName, setUserName] = useState("User");
  const removeSession = () => {
    sessionStorage.removeItem("tokenUser");
    sessionStorage.removeItem("tokenAdmin");
  };

  const getUserName = async () => {
    const token = sessionStorage.getItem("tokenUser");
    if (!token) {
      console.error("Token não encontrado.");
      return;
    }
    const cpfUser = jwtDecode(token).cpfUser;
    try {
      const response = await fetch(`http://localhost:3000/user/${cpfUser}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("tokenUser"),
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUserName(data.nome);
      } else {
        console.error("Erro ao buscar o usuário.");
      }
    } catch (error) {
      console.error("Erro inesperado ao buscar o osuario.");
    }
  };

  useEffect(() => {
    getUserName();
  }, []);
  return (
    <nav className="bg-spring-green border-2 border-rich-black px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
      {/* Logo e Título */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white rounded-full">
            <BookCheck size={32} />
          </div>
          <h1 className="text-rich-black font-bold text-xl md:text-2xl">
            BibliotecasGomes
          </h1>
        </div>

        {/* Botão Hambúrguer para Mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden p-2 text-rich-black focus:outline-none focus:ring-2 focus:ring-rich-black"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Dropdown de Navegação para Mobile */}
      <div
        className={`${
          menuAberto ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex md:items-center md:gap-6 font-semibold text-rich-black text-lg`}
      >
        <Link
          to="/user/book"
          className="block w-full md:w-auto text-left md:text-center hover:underline"
        >
          Consultar Catálogo
        </Link>
        <Link
          to="/user/loan"
          className="block w-full md:w-auto text-left md:text-center hover:underline"
        >
          Empréstimos Ativos
        </Link>
      </div>

      {/* Usuário e Logout */}
      <div
        className={`${
          menuAberto ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex md:items-center md:gap-4 text-rich-black`}
      >
        <div className="flex flex-col gap-2">
          <Link to="/user/data">
            <div className="flex items-center gap-2">
              <User size={24} />
              <span>{userName}</span>
            </div>
          </Link>
          <Link
            to="/"
            onClick={removeSession}
            className="flex items-center gap-2 font-semibold hover:text-india-green transition"
          >
            <LogOut size={24} />
            Deslogar
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarUser;
