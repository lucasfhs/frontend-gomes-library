import NavBarUser from "../components/NavBarUser";
import CardLivro from "../components/CardLivro";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function UserMainPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBarUser></NavBarUser>
      <Outlet></Outlet>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserMainPage;
