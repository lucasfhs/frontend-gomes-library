import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import UserMainPage from "./pages/UserMainPage.jsx";
import UserLoanHistory from "./pages/UserLoanHistory.jsx";
import LandingPage from "./pages/LandingPage.jsx";
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
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/cadastro",
    element: <Cadastro></Cadastro>,
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
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
