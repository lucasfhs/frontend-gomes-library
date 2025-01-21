function LoanCard({ id, book, library, loanDate, returnDate }) {
  return (
    <div className="bg-spring-green/10 border-2 border-spring-green rounded-md p-4 shadow-md">
      <div className="grid grid-cols-5 gap-4 text-rich-black font-medium text-center">
        <div>{id}</div>
        <div>{book}</div>
        <div>{library}</div>
        <div>{loanDate}</div>
        <div>{returnDate}</div>
      </div>
    </div>
  );
}

export default LoanCard;
