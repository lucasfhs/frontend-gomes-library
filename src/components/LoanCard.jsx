function LoanCard({ id, book, library, loanDate, returnDate }) {
  return (
    <div className="bg-rich-black border-2 border-spring-green rounded-lg p-4 shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-5 text-center text-white gap-2 text-sm md:text-lg">
        <div className="font-bold text-spring-green">#{id}</div>
        <div className="break-words">{book}</div>
        <div>{library}</div>
        <div>{loanDate}</div>
        <div>{returnDate}</div>
      </div>
    </div>
  );
}

export default LoanCard;
