import { BookCheck, User, LogOut } from "lucide-react";

function NavBarAdmin() {
  return (
    <nav className="bg-spring-green border-2 border-rich-black px-6 py-4 flex justify-between items-center">
      {/* Logo e Título */}
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white rounded-full">
          <BookCheck size={32} />
        </div>
        <h1 className="text-rich-black font-bold text-xl md:text-2xl">
          BibliotecasGomes
        </h1>
      </div>

      {/* Navegação Central */}
      <div className="flex gap-6 font-semibold text-rich-black text-lg">
        <button className="hover:underline">Livros</button>
        <button className="hover:underline">Empréstimo</button>
        <button className="hover:underline">Biblioteca</button>
        <button className="hover:underline">Livro em Dada Biblioteca</button>
      </div>

      {/* Usuário e Logout */}
      <div className="flex items-center gap-4 text-rich-black">
        <div className="flex items-center gap-2">
          <User size={24} />
          <span>Obi Wan Kenobi</span>
        </div>
        <button className="flex items-center gap-2 font-semibold hover:text-india-green transition">
          <LogOut size={24} />
          Deslogar
        </button>
      </div>
    </nav>
  );
}

export default NavBarAdmin;
