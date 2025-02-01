import { useState } from "react";

function UserProfileUpdate() {
  const [userData, setUserData] = useState({
    cpf: "12345678901",
    nome: "Obi Wan Kenobi",
    email: "obiwan@jedi.com",
    telefone: "11987654321",
    dataNascimento: "1977-05-25",
    rua: "Rua Jedi",
    bairro: "Aliança Rebelde",
    cidade: "Coruscant",
    estado: "Galáxia Central",
    pais: "República",
    cep: "00000-000",
    senha: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Atualizando dados:", userData);
    alert("Dados atualizados com sucesso!");
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita."
      )
    ) {
      console.log("Conta excluída:", userData.cpf);
      alert("Conta excluída com sucesso!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 border-2 border-spring-green rounded-lg p-6 mt-8 mb-8 shadow-lg">
      <h2 className="text-spring-green text-2xl font-bold mb-6 text-center">
        Atualizar Dados Cadastrais
      </h2>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Nome */}
        <div>
          <label className="text-white font-semibold">Nome:</label>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-white font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
          />
        </div>

        {/* Telefone */}
        <div>
          <label className="text-white font-semibold">Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={userData.telefone}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Data de Nascimento */}
        <div>
          <label className="text-white font-semibold">
            Data de Nascimento:
          </label>
          <input
            type="date"
            name="dataNascimento"
            value={userData.dataNascimento}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Rua */}
        <div>
          <label className="text-white font-semibold">Rua:</label>
          <input
            type="text"
            name="rua"
            value={userData.rua}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Bairro */}
        <div>
          <label className="text-white font-semibold">Bairro:</label>
          <input
            type="text"
            name="bairro"
            value={userData.bairro}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Cidade */}
        <div>
          <label className="text-white font-semibold">Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={userData.cidade}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Estado */}
        <div>
          <label className="text-white font-semibold">Estado:</label>
          <input
            type="text"
            name="estado"
            value={userData.estado}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* País */}
        <div>
          <label className="text-white font-semibold">País:</label>
          <input
            type="text"
            name="pais"
            value={userData.pais}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* CEP */}
        <div>
          <label className="text-white font-semibold">CEP:</label>
          <input
            type="text"
            name="cep"
            value={userData.cep}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Senha */}
        <div className="md:col-span-2">
          <label className="text-white font-semibold">Senha:</label>
          <input
            type="password"
            name="senha"
            value={userData.senha}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-2 border-spring-green focus:outline-none focus:ring-2 focus:ring-india-green"
            required
          />
        </div>

        {/* Botões */}
        <div className="md:col-span-2 flex flex-col md:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-spring-green text-rich-black font-bold px-6 py-2 rounded-md hover:bg-india-green transition"
          >
            Atualizar Dados
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-full md:w-auto bg-red-600 text-white font-bold px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Excluir Conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileUpdate;
