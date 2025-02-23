import { BookCheck } from "lucide-react";
function Header() {
  return (
    <div>
      <div className="flex justify-center font-chakraPetch items-center gap-2 py-4 bg-spring-green font-bold text-3xl md:text-5xl border sm:border-2 border-black">
        <div className="p-4 bg-white border-2 border-gray-950 rounded-full">
          <BookCheck size={48} />
        </div>
        Bibliotecas <div className=""> Gomes</div>
      </div>
    </div>
  );
}
export default Header;
