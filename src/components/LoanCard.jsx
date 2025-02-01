function LoanCard({ id, book, library, loanDate, returnDate }) {
  return (
    <div className="bg-spring-green/10 border-2 border-spring-green rounded-md p-4 shadow-md mb-2 hover:bg-spring-green/20 transition duration-200">
      <div className="grid grid-cols-5 gap-4 text-white font-medium text-center">
        <div className="text-spring-green font-bold">{id}</div>
        <div>{book}</div>
        <div>{library}</div>
        <div className="text-gray-300">{loanDate}</div>
        <div className="text-gray-300">{returnDate}</div>
      </div>
    </div>
  );
}

export default LoanCard;
