function CardLogin() {
  return (
    <div className="bg-spring-green shadow border-2 p-10 max-w-lg mx-auto aspect-[4/3] flex flex-col gap-8   justify-center rounded-md">
      <form action="" class="flex flex-col gap-3">
        <label className="text-2xl">Usuario</label>
        <input
          type="text"
          className="bg-white rounded-lg block w-full border sm:border-2 border-black"
        />
        <label className="text-2xl">Senha</label>
        <input
          type="password"
          className="bg-white rounded-lg block w-full border sm:border-2 border-black"
        />
      </form>
      <button className="bg-white text-black border border-black py-2 px-4 rounded-lg">
        Entrar
      </button>
    </div>
  );
}
export default CardLogin;
