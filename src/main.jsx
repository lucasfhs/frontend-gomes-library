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
import UserLoanHistory from "./pages/UserLoanHistory.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AdminPageLivro from "./components/AdminPageLivro.jsx";
import AdminMainPage from "./pages/AdminMainPage.jsx";
import AdminPageEmprestimo from "./components/AdminPageEmprestimo.jsx";
import AdminBibliotecaPage from "./components/AdminBibliotecaPage.jsx";
import AdminLivroBibliotecaPage from "./components/AdminLivroBibliotecaPage.jsx";
import CardLivro from "./components/CardLivro.jsx";
import UserProfileUpdate from "./components/UserProfileUpdate.jsx";
import ListaLivros from "./components/ListaLivros.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "contact",
//     element: <Contact></Contact>,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminMainPage></AdminMainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "book", element: <AdminPageLivro></AdminPageLivro> },
      { path: "loan", element: <AdminPageEmprestimo></AdminPageEmprestimo> },
      { path: "library", element: <AdminBibliotecaPage></AdminBibliotecaPage> },
      {
        path: "book-library",
        element: <AdminLivroBibliotecaPage></AdminLivroBibliotecaPage>,
      },
    ],
  },
  {
    path: "/user",
    element: <UserMainPage></UserMainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "loan", element: <UserLoanHistory></UserLoanHistory> },
      { path: "book", element: <ListaLivros></ListaLivros> },
      { path: "data", element: <UserProfileUpdate></UserProfileUpdate> },
    ],
  },
  {
    path: "/loginUser",
    element: <LoginUser></LoginUser>,
  },
  {
    path: "/loginAdmin",
    element: <LoginAdmin></LoginAdmin>,
  },
  {
    path: "/registerUser",
    element: <RegisterUser></RegisterUser>,
  },
  {
    path: "/registerAdmin",
    element: <RegisterAdmin></RegisterAdmin>,
  },
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
