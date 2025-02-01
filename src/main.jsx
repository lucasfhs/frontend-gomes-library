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
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "contact", element: <Contact></Contact> },
      { path: "/", element: <Home></Home> },
      { path: "contact/:id", element: <ContactDetails></ContactDetails> },
    ],
  },
  {
    path: "/admin",
    element: <AdminMainPage></AdminMainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "book", element: <AdminPageLivro></AdminPageLivro> },
      { path: "loan", element: <AdminPageEmprestimo></AdminPageEmprestimo> },
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
    path: "/user",
    element: <UserMainPage></UserMainPage>,
  },
  {
    path: "/loan",
    element: <UserLoanHistory></UserLoanHistory>,
  },
  {
    path: "/home",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/library",
    element: <BibliotecaPage></BibliotecaPage>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
