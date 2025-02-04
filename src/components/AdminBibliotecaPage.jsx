import React, { useEffect, useState } from "react";
import CardBibliotecaUpdate from "./CardBibliotecaUpdate";
import NotificationBar from "./NotificationBar";

function AdminBibliotecaPage() {
  const API_URL = "http://localhost:3000/library";
  const [bibliotecas, setBibliotecas] = useState([]);
  const [notification, setNotification] = useState(null);
  const [novaBiblioteca, setNovaBiblioteca] = useState({
    name: "",
    phoneNumber: "",
    address: {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
    },
  });
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODcwNDA3OSwiZXhwIjoxNzM5MzA4ODc5fQ.U3aBJ0LPUVhakyzMLcVLx1FBPBxXfK0eIsywyVNuZ3A",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBibliotecas(data);
        showNotification("Bibliotecas carregados com sucesso!", "success");
      })
      .catch((error) => {
        showNotification("Erro ao carregar bibliotecas.", "error");
        console.log(error);
      });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Verifica se o campo alterado pertence ao endereço
    if (name in novaBiblioteca.address) {
      setNovaBiblioteca((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value, // Atualiza a propriedade correta do endereço
        },
      }));
    } else {
      // Caso contrário, atualiza diretamente no estado principal
      setNovaBiblioteca((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const cadastrarBiblioteca = async (e) => {
    e.preventDefault();
    if (
      !novaBiblioteca.name ||
      !novaBiblioteca.phoneNumber ||
      Object.values(novaBiblioteca.address).some((v) => !v)
    ) {
      showNotification("Preencha todos os campos", "danger");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsImlhdCI6MTczODcwNDA3OSwiZXhwIjoxNzM5MzA4ODc5fQ.U3aBJ0LPUVhakyzMLcVLx1FBPBxXfK0eIsywyVNuZ3A",
        },
        body: JSON.stringify(novaBiblioteca),
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar biblioteca.");
      }

      const { result } = await res.json();
      setBibliotecas((prev) => [...prev, result]); // Atualiza a lista localmente
      setNovaBiblioteca({
        name: "",
        phoneNumber: "",
        address: {
          street: "",
          neighborhood: "",
          city: "",
          state: "",
          country: "",
          postal_code: "",
        },
      });
      showNotification("Biblioteca cadastrada com sucesso!", "success");
    } catch (error) {
      showNotification(
        "Erro ao cadastrar biblioteca." + error.message,
        "danger"
      );
      console.error("Erro ao cadastrar biblioteca:", error);
    }
  };

  const alterarBiblioteca = async (id, novosDados) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
        },
        body: JSON.stringify(novosDados),
      });
      if (!res.ok) throw new Error("Erro ao atualizar biblioteca.");
      setBibliotecas((prev) =>
        prev.map((biblioteca) =>
          biblioteca.id === id ? { ...biblioteca, ...novosDados } : livro
        )
      );
      showNotification("Biblioteca alterado com sucesso.", "success");
    } catch (error) {
      showNotification("Erro ao atualizar" + error.message, "danger");
      console.error("Erro ao atualizar biblioteca:", error);
    }
  };

  const deletarBiblioteca = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9naW4iOiJqb2FvLnNpbHZhIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1IiwiaWF0IjoxNzM4MTA5ODI5LCJleHAiOjE3Mzg3MTQ2Mjl9.bA3e6ijNoVs4ACCnml0wFivW7HIZGxC_pBkBSacrE6I",
        },
      });

      if (!res.ok) throw new Error("Erro ao deletar biblioteca.");
      setBibliotecas((prev) =>
        prev.filter((biblioteca) => biblioteca.id !== id)
      );
      showNotification("Biblioteca deletada com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao deletar biblioteca:", error);
      showNotification("Erro ao deletar biblioteca", "danger");
    }
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
            name="name"
            placeholder="Nome da Biblioteca"
            value={novaBiblioteca.name}
            onChange={(e) =>
              setNovaBiblioteca({ ...novaBiblioteca, name: e.target.value })
            }
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Telefone (11 dígitos)"
            value={novaBiblioteca.phoneNumber}
            onChange={(e) =>
              setNovaBiblioteca({
                ...novaBiblioteca,
                phoneNumber: e.target.value,
              })
            }
            className="w-full p-2 border rounded-md"
            maxLength="11"
          />

          <h3 className="text-white font-bold">Endereço</h3>
          <input
            type="text"
            name="street"
            placeholder="Rua"
            value={novaBiblioteca.address.street}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            value={novaBiblioteca.address.neighborhood}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={novaBiblioteca.address.city}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="state"
            placeholder="Estado"
            value={novaBiblioteca.address.state}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="country"
            placeholder="País"
            value={novaBiblioteca.address.country}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="postal_code"
            placeholder="CEP"
            value={novaBiblioteca.address.postal_code}
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
      {notification && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default AdminBibliotecaPage;
