import React, { useEffect, useState } from "react";
import LoanList from "../components/LoanList";
import NotificationBar from "../components/NotificationBar";
import { jwtDecode } from "jwt-decode";

function UserLoanHistory() {
  const [loans, setLoans] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("tokenUser");
    const cpfUser = jwtDecode(token).cpfUser;
    const API_URL = "http://localhost:3000/report/getUserLoans";
    fetch(API_URL + `/${cpfUser}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o histórico de empréstimos.");
        }
        return response.json();
      })
      .then((data) => {
        setLoans(data);
      })
      .catch((err) => {
        showNotification(err.message, "error");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {notification && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <LoanList loans={loans} />
      {/* Footer */}
    </div>
  );
}

export default UserLoanHistory;
