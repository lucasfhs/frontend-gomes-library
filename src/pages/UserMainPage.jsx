import NavBarUser from "../components/NavBarUser";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function UserMainPage() {
  return (
    <div className="flex bg-gray-800 flex-col min-h-screen justify-between">
      <NavBarUser></NavBarUser>
      <Outlet></Outlet>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserMainPage;
