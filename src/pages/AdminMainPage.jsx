import NavBarAdmin from "../components/NavBarAdmin";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function AdminMainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 justify-between">
      <NavBarAdmin></NavBarAdmin>

      <Outlet></Outlet>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminMainPage;
