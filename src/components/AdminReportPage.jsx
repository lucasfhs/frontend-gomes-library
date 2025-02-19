import React, { useEffect, useState } from "react";
import NotificationBar from "./NotificationBar";
import CardHighAvailabilityCatalog from "./CardHighAvailabilityCatalog";
import CardLibrariesAndBook from "./CardLibrariesAndBook";
import CardMatureCustomers from "./CardMatureCustomers";
function AdminReportPage() {
  const Base_API_URL = "http://localhost:3000/report/";
  const [bibliotecasLivros, setBibliotecasLivros] = useState([]);
  const [matureCustomers, setMatureCustomers] = useState([]);
  const [highAvailabilityCatalog, setHighAvailabilityCatalog] = useState([]);
  const [notification, setNotification] = useState(null);
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const fetchBibliotecaLivros = () => {
    fetch(Base_API_URL + "getLibrariesAndBooks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("tokenAdmin"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBibliotecasLivros(data);
        showNotification(
          "Relação biblbiotecas e livros carregadas com sucesso!",
          "success"
        );
      })
      .catch(() =>
        showNotification(
          "Erro ao carregar relação biblbiotecas e livros.",
          "error"
        )
      );
  };

  const fetchHighAvailabilityCatalog = () => {
    fetch(Base_API_URL + "getHighAvailabilityCatalog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("tokenAdmin"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setHighAvailabilityCatalog(data);
        showNotification(
          "Relação High Availability Catalog carregadas com sucesso!",
          "success"
        );
      })
      .catch(() =>
        showNotification(
          "Erro ao carregar relação high availability catalog",
          "error"
        )
      );
  };

  const fetchMatureCustomers = () => {
    fetch(Base_API_URL + "getMatureCustomers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("tokenAdmin"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMatureCustomers(data);
        showNotification(
          "Relação Mature Customers carregadas com sucesso!",
          "success"
        );
      })
      .catch(() =>
        showNotification("Erro ao carregar relação mature Customers", "error")
      );
  };
  useEffect(() => {
    fetchBibliotecaLivros();
    fetchHighAvailabilityCatalog();
    fetchMatureCustomers();
  }, []);

  return (
    <div className="grid  h-screen">
      {/* Região de Scroll com os Cards */}
      <div className="col-span-3 overflow-y-auto p-6 bg-gray-800">
        <h2 className="text-2xl p-2 font-publicSans font-bold text-white mb-4">
          Biblioteca e quantidade de livros
        </h2>

        {/* Card de Bibliotecas e Livros */}
        <div className="grid mt-8  p-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {bibliotecasLivros.map((item) => (
            <CardLibrariesAndBook key={item.id} data={item} />
          ))}
        </div>
        <h2 className="text-2xl p-2 mt-4 font-publicSans font-bold text-white mb-4">
          Livros com alta disponibilidade
        </h2>
        {/* Card de High Availability Catalog */}
        <div className="grid mt-4   p-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {highAvailabilityCatalog.map((item) => (
            <CardHighAvailabilityCatalog key={item.id} data={item} />
          ))}
        </div>
        <h2 className="text-2xl p-2 mt-4 font-publicSans font-bold text-white mb-4">
          Emprestimos de clientes com mais de 25 anos
        </h2>
        {/* Card de Clientes Maduros */}
        <div className="grid mt-4 p-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {matureCustomers.map((item) => (
            <CardMatureCustomers key={item.id} data={item} />
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

export default AdminReportPage;
