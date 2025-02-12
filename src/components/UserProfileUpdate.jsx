import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const apiURL = "http://localhost:3000";

function UserProfileUpdate() {
  const [userData, setUserData] = useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "",
    cep: "",
    senha: "",
  });
  const formatarData = (dataNascimento) => {
    if (!dataNascimento) return ""; // Retorna string vazia se a data for null
    return dataNascimento.split("T")[0]; // Extrai a parte da data (YYYY-MM-DD) do formato ISO
  };
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("tokenUser");

    if (!token) {
      alert("Usuário não autenticado.");
      navigate("/");
      return;
    }
    const cpfUser = jwtDecode(token).cpfUser;
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${apiURL}/user/${cpfUser}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do usuário.");
        }

        const data = await response.json();

        setUserData({
          cpf: data.cpf,
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          dataNascimento: formatarData(data.dataNascimento),
          rua: data.endereco.rua,
          bairro: data.endereco.bairro,
          cidade: data.endereco.cidade,
          estado: data.endereco.estado,
          pais: data.endereco.pais,
          cep: data.endereco.cep,
          senha: "",
        });
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar os dados do usuário.");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("tokenUser");

    try {
      const response = await fetch(`${apiURL}/user/${userData.cpf}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          name: userData.nome,
          email: userData.email,
          phoneNumber: userData.telefone,
          birthDate: userData.dataNascimento,
          password: userData.senha,
          address: {
            street: userData.rua,
            neighborhood: userData.bairro,
            city: userData.cidade,
            state: userData.estado,
            country: userData.pais,
            postal_code: userData.cep,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar os dados.");
      }

      alert("Dados atualizados com sucesso! relogue");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar os dados.");
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita."
      )
    ) {
      return;
    }

    const token = sessionStorage.getItem("tokenUser");

    try {
      const response = await fetch(`${apiURL}/user/${userData.cpf}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir a conta.");
      }

      alert("Conta excluída com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir a conta.");
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
