import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const tokenUser = sessionStorage.getItem("tokenUser");
  const tokenAdmin = sessionStorage.getItem("tokenAdmin");

  const isValidToken = (token) => {
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica o payload do JWT
      const isExpired = payload.exp * 1000 < Date.now(); // Verifica se o token expirou
      return !isExpired;
    } catch (error) {
      return false;
    }
  };

  const hasAccess =
    (role === "admin" && isValidToken(tokenAdmin)) ||
    (role === "user" && isValidToken(tokenUser));

  return hasAccess ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
