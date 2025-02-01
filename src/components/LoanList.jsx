import LoanCard from "./LoanCard";

function LoanList({ loans }) {
  return (
    <div className="bg-rich-black border-2  border-spring-green rounded-lg p-6 shadow-lg">
      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-5 gap-4 text-spring-green font-bold text-center text-lg mb-4 py-2 border-b-2 border-spring-green">
        <div className="uppercase">ID</div>
        <div className="uppercase">Livro</div>
        <div className="uppercase">Biblioteca</div>
        <div className="uppercase">Empréstimo</div>
        <div className="uppercase">Devolução</div>
      </div>

      {/* Lista de empréstimos */}
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
  );
}

export default LoanList;
