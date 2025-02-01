import NavBarUser from "../components/NavBarUser";

import Footer from "../components/Footer";
import LoanList from "../components/LoanList";
const loans = [
  {
    id: 1,
    book: "O Senhor dos Anéis",
    library: "Central",
    loanDate: "20/01/2025",
    returnDate: "27/01/2025",
  },
  {
    id: 2,
    book: "Harry Potter",
    library: "Filial Norte",
    loanDate: "18/01/2025",
    returnDate: "25/01/2025",
  },
];
function UserLoanHistory() {
  return (
    <div className="flex flex-col justify-between">
      <LoanList loans={loans}></LoanList>
      {/* Footer */}
    </div>
  );
}

export default UserLoanHistory;
