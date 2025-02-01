import LoanCard from "./LoanCard";

function LoanList({ loans }) {
  return (
    <div className="bg-rich-black border-2 border-spring-green rounded-lg p-6 shadow-lg">
      {/* Título só para telas pequenas */}
      <h2 className="text-center text-spring-green font-bold text-xl mb-4 ">
        Empréstimos Ativos
      </h2>

      {/* Cabeçalho da tabela (exibido apenas em telas médias e grandes) */}
      <div className="hidden md:grid grid-cols-5 text-spring-green font-bold text-center text-lg mb-4 py-2 border-b-2 border-spring-green">
        <div>ID</div>
        <div>Livro</div>
        <div>Biblioteca</div>
        <div>Empréstimo</div>
        <div>Devolução</div>
      </div>

      {/* Lista de empréstimos */}
      <div className="flex flex-col space-y-4">
        {loans.length > 0 ? (
          loans.map((loan) => (
            <LoanCard
              key={loan.id}
              id={loan.id}
              book={loan.book}
              library={loan.library}
              loanDate={loan.loanDate}
              returnDate={loan.returnDate}
            />
          ))
        ) : (
          <p className="text-white text-center text-lg mt-4">
            Nenhum empréstimo encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default LoanList;
