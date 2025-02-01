import React, { useEffect, useState } from "react";
import CardLivro from "./CardLivro.jsx";

function ListaLivros() {
  const [livros, setLivros] = useState([
    {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      idioma: "Português",
      paginas: 1200,
      quantidade: 4,
      categorias: ["Fantasia", "Aventura"],
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      idioma: "Inglês",
      paginas: 328,
      quantidade: 2,
      categorias: ["Ficção", "Distopia"],
    },
  ]);

  //   useEffect(() => {
  //     // Simula chamada à API (substituir futuramente pela API real)
  //     fetch("https://api.exemplo.com/livros") // Altere para a API real
  //       .then((res) => res.json())
  //       .then((data) => setLivros(data))
  //       .catch((error) => console.error("Erro ao carregar livros:", error));
  //   }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="space-y-6">
        {livros.map((livro, index) => (
          <CardLivro key={index} livro={livro} />
        ))}
      </div>
    </div>
  );
}

export default ListaLivros;
