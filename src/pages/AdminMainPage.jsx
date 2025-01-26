import NavBarAdmin from "../components/NavBarAdmin";
import CardLivro from "../components/CardLivro";
import Footer from "../components/Footer";
function AdminMainPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBarAdmin></NavBarAdmin>
      <CardLivro></CardLivro>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminMainPage;
