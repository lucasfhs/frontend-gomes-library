import { useState } from "react";

function CardCadastroUser() {
  const [formData, setFormData] = useState({
    cpf: "",
    name: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    password: "",
    address: {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
    },
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Usuário cadastrado com sucesso!");
      } else {
        setMessage(data.message || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      setMessage("Erro ao conectar com o servidor. Tente novamente.");
    }
  };

  return (
    <div className="bg-white p-10 shadow-md rounded-lg max-w-lg mx-auto border-2 border-rich-black">
      <h2 className="text-center text-3xl font-bold text-black mb-6">
        Cadastro
      </h2>
      {message && <p className="text-center text-red-500">{message}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-rich-black font-semibold">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">
            Telefone
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">
            Data de Nascimento
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-rich-black font-semibold">Rua</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
            />
          </div>
          <div>
            <label className="block text-rich-black font-semibold">
              Número
            </label>
            <input
              type="text"
              name="address.postal_code"
              value={formData.address.postal_code}
              onChange={handleChange}
              className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Bairro</label>
          <input
            type="text"
            name="address.neighborhood"
            value={formData.address.neighborhood}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Cidade</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">Estado</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            className="w-full border-b-2 border-rich-black focus:outline-none focus:border-spring-green bg-transparent"
          />
        </div>
        <div>
          <label className="block text-rich-black font-semibold">País</label>
          <input
            type="text"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
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
