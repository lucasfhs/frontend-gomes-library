import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
import ContactDetails from "./ContactDetails.jsx";
import LoginUser from "../pages/LoginUser.jsx";
import LoginAdmin from "../pages/LoginAdmin.jsx";
import RegisterUser from "../pages/RegisterUser.jsx";
import RegisterAdmin from "../pages/RegisterAdmin.jsx";
import UserMainPage from "../pages/UserMainPage.jsx";
import UserLoanHistory from "../pages/UserLoanHistory.jsx";
import LandingPage from "../pages/LandingPage.jsx";

import App from "../App.jsx";
exports.router = createBrowserRouter([
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
]);
