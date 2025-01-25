function CardLoginAdmin() {
  return (
    <div className="bg-spring-green shadow-lg border-2 border-green-500  p-10 max-w-lg mx-auto aspect-[4/3] flex flex-col gap-8  font-chakraPetch justify-center rounded-md">
      <form action="" class="flex flex-col gap-3">
        <label className="text-2xl">Usuario</label>
        <input
          type="text"
          className="bg-white rounded-lg block w-full border  border-black"
        />
        <label className="text-2xl">Senha</label>
        <input
          type="password"
          className="bg-white rounded-lg block w-full border  border-black"
        />
        <div className="flex items-center justify-between mt-6">
          <button className="underline text-sm">Não possuo cadastro</button>
          <button className="underline text-sm">Preciso de ajuda</button>
        </div>
      </form>
      <button className="bg-white text-black border border-black hover:bg-black  hover:text-white  transition-all  py-2 px-4 rounded-lg">
        Entrar
      </button>
    </div>
  );
}
export default CardLoginAdmin;
