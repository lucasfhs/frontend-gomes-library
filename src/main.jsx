import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import LoginUser from "./pages/LoginUser.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import RegisterAdmin from "./pages/RegisterAdmin.jsx";
import UserMainPage from "./pages/UserMainPage.jsx";
import BibliotecaPage from "./components/BibliotecaPage.jsx";
import AdminReportPage from "./components/AdminReportPage.jsx";
import UserLoanHistory from "./pages/UserLoanHistory.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AdminPageLivro from "./components/AdminPageLivro.jsx";
import AdminMainPage from "./pages/AdminMainPage.jsx";
import AdminPageEmprestimo from "./components/AdminPageEmprestimo.jsx";
import AdminBibliotecaPage from "./components/AdminBibliotecaPage.jsx";
import AdminLivroBibliotecaPage from "./components/AdminLivroBibliotecaPage.jsx";
import UserProfileUpdate from "./components/UserProfileUpdate.jsx";
import ListaLivros from "./components/ListaLivros.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminMainPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <AdminMainPage /> },
      { path: "book", element: <AdminPageLivro /> },
      { path: "loan", element: <AdminPageEmprestimo /> },
      { path: "library", element: <AdminBibliotecaPage /> },
      { path: "book-library", element: <AdminLivroBibliotecaPage /> },
      { path: "report", element: <AdminReportPage /> },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <UserMainPage />
      </ProtectedRoute>
    ), // Proteção para usuários autenticados
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <UserMainPage /> },
      { path: "loan", element: <UserLoanHistory /> },
      { path: "book", element: <ListaLivros /> },
      { path: "data", element: <UserProfileUpdate /> },
    ],
  },
  { path: "/loginUser", element: <LoginUser /> },
  { path: "/loginAdmin", element: <LoginAdmin /> },
  { path: "/registerUser", element: <RegisterUser /> },
  { path: "/registerAdmin", element: <RegisterAdmin /> },
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
