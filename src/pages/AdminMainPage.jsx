import NavBarAdmin from "../components/NavBarAdmin";
import AdminPage from "../components/AdminPage";
import Footer from "../components/Footer";
function AdminMainPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBarAdmin></NavBarAdmin>
      <AdminPage></AdminPage>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminMainPage;
