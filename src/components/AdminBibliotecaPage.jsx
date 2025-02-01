import React, { useState } from "react";
import CardBibliotecaUpdate from "./CardBibliotecaUpdate";

function AdminBibliotecaPage() {
  const [bibliotecas, setBibliotecas] = useState([
    {
      id: 1,
      nome: "Biblioteca Central",
      telefone: "11987654321",
      endereco: {
        rua: "Rua A",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil",
        cep: "01000-000",
      },
    },
    {
      id: 1,
      nome: "Biblioteca Central",
      telefone: "11987654321",
      endereco: {
        rua: "Rua A",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil",
        cep: "01000-000",
      },
    },
    {
      id: 1,
      nome: "Biblioteca Central",
      telefone: "11987654321",
      endereco: {
        rua: "Rua A",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil",
        cep: "01000-000",
      },
    },
  ]);

  const [novaBiblioteca, setNovaBiblioteca] = useState({
    nome: "",
    telefone: "",
    endereco: {
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      cep: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaBiblioteca((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, [name]: value }, // Atualiza apenas a parte do endereço
    }));
  };

  const cadastrarBiblioteca = (e) => {
    e.preventDefault();
    if (
      !novaBiblioteca.nome ||
      !novaBiblioteca.telefone ||
      Object.values(novaBiblioteca.endereco).some((v) => !v)
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    setBibliotecas((prev) => [
      ...prev,
      { ...novaBiblioteca, id: prev.length + 1 },
    ]);
    setNovaBiblioteca({
      nome: "",
      telefone: "",
      endereco: {
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: "",
        cep: "",
      },
    });
  };

  const alterarBiblioteca = (id, novosDados) => {
    setBibliotecas((prev) =>
      prev.map((biblioteca) =>
        biblioteca.id === id ? { ...biblioteca, ...novosDados } : biblioteca
      )
    );
  };

  const deletarBiblioteca = (id) => {
    setBibliotecas((prev) => prev.filter((biblioteca) => biblioteca.id !== id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 h-screen">
      {/* Sidebar fixa para cadastro */}
      <aside className="bg-gray-900 border-b-2 lg:border-b-0 lg:border-l-2 border-rich-black p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Cadastrar Nova Biblioteca
        </h2>
        <form className="space-y-4" onSubmit={cadastrarBiblioteca}>
          <input
            type="text"
            name="nome"
            placeholder="Nome da Biblioteca"
            value={novaBiblioteca.nome}
            onChange={(e) =>
              setNovaBiblioteca({ ...novaBiblioteca, nome: e.target.value })
            }
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone (11 dígitos)"
            value={novaBiblioteca.telefone}
            onChange={(e) =>
              setNovaBiblioteca({ ...novaBiblioteca, telefone: e.target.value })
            }
            className="w-full p-2 border rounded-md"
            maxLength="11"
          />

          <h3 className="text-white font-bold">Endereço</h3>
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            value={novaBiblioteca.endereco.rua}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={novaBiblioteca.endereco.bairro}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={novaBiblioteca.endereco.cidade}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={novaBiblioteca.endereco.estado}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={novaBiblioteca.endereco.pais}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={novaBiblioteca.endereco.cep}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />

          <button
            type="submit"
            className="w-full py-2 bg-spring-green text-black font-bold rounded-md hover:bg-rich-black transition"
          >
            Cadastrar
          </button>
        </form>
      </aside>

      {/* Lista de Bibliotecas */}
      <div className="col-span-3 overflow-y-auto p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-white mb-4">
          Gerenciar Bibliotecas
        </h1>
        <div className="grid gap-6">
          {bibliotecas.map((b) => (
            <CardBibliotecaUpdate
              key={b.id}
              biblioteca={b}
              onAlterar={alterarBiblioteca}
              onDeletar={deletarBiblioteca}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminBibliotecaPage;
