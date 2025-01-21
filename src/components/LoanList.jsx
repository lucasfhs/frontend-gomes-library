import LoanCard from "./LoanCard";

function LoanList({ loans }) {
  return (
    <div className="bg-spring-green/5 border-2 border-spring-green rounded-lg p-6">
      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-5 gap-4 text-rich-black font-bold text-center text-lg mb-4">
        <div>ID</div>
        <div>Livro</div>
        <div>Biblioteca</div>
        <div>Data de Empréstimo</div>
        <div>Data de Devolução</div>
      </div>

      {/* Lista de empréstimos */}
      {loans.map((loan) => (
        <LoanCard
          key={loan.id}
          id={loan.id}
          book={loan.book}
          library={loan.library}
          loanDate={loan.loanDate}
          returnDate={loan.returnDate}
        />
      ))}
    </div>
  );
}

export default LoanList;
