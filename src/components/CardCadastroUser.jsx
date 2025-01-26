function CardCadastroUser() {
  return (
    <div className="bg-white p-10 shadow-md rounded-lg max-w-lg mx-auto border-2 border-rich-black">
      <h2 className="text-center text-3xl font-bold text-black mb-6">
        Cadastro
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-rich-black font-semibold">CPF</label>
          <input
            type="text"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Nome</label>
          <input
            type="text"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Email</label>
          <input
            type="email"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">
            Telefone
          </label>
          <input
            type="text"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Senha</label>
          <input
            type="password"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-rich-black font-semibold">Rua</label>
            <input
              type="text"
              className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
            />
          </div>
          <div>
            <label className="block text-rich-black font-semibold">
              Número
            </label>
            <input
              type="text"
              className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Bairro</label>
          <input
            type="text"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Cidade</label>
          <input
            type="text"
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Estado</label>
          <input
            type="text"
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
    </div>
  );
}

export default CardCadastroUser;
