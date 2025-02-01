import React, { useState } from "react";

function CardBibliotecaUpdate({ biblioteca, onAlterar, onDeletar }) {
  const [formDados, setFormDados] = useState(biblioteca);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, [name]: value }, // Atualiza apenas a parte do endereço
    }));
  };

  const handleAlterar = () => {
    onAlterar(biblioteca.id, formDados);
  };

  const handleDeletar = () => {
    onDeletar(biblioteca.id);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-rich-black flex flex-col space-y-2">
      {/* Campos editáveis */}
      <input
        type="text"
        name="nome"
        value={formDados.nome}
        onChange={(e) => setFormDados({ ...formDados, nome: e.target.value })}
        className="w-full p-2 border rounded-md"
        placeholder="Nome da Biblioteca"
      />

      <input
        type="text"
        name="telefone"
        value={formDados.telefone}
        onChange={(e) =>
          setFormDados({ ...formDados, telefone: e.target.value })
        }
        className="w-full p-2 border rounded-md"
        placeholder="Telefone (11 dígitos)"
        maxLength="11"
      />

      {/* Endereço separado em campos */}
      <h3 className="font-bold">Endereço</h3>
      <input
        type="text"
        name="rua"
        value={formDados.endereco.rua}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="Rua"
      />
      <input
        type="text"
        name="bairro"
        value={formDados.endereco.bairro}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="Bairro"
      />
      <input
        type="text"
        name="cidade"
        value={formDados.endereco.cidade}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="Cidade"
      />
      <input
        type="text"
        name="estado"
        value={formDados.endereco.estado}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="Estado"
      />
      <input
        type="text"
        name="pais"
        value={formDados.endereco.pais}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="País"
      />
      <input
        type="text"
        name="cep"
        value={formDados.endereco.cep}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        placeholder="CEP"
      />

      {/* Botões de Alterar e Deletar */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleAlterar}
          className="py-2 px-6 bg-spring-green text-rich-black font-bold rounded-md border-2 border-rich-black hover:bg-india-green transition"
        >
          Alterar
        </button>
        <button
          onClick={handleDeletar}
          className="py-2 px-6 bg-red-500 text-white font-bold rounded-md border-2 border-red-700 hover:bg-red-700 transition"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}

export default CardBibliotecaUpdate;
