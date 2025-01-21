import NavBarUser from "../components/NavBarUser";
import CardLivro from "../components/CardLivro";
import Footer from "../components/Footer";
function UserMainPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBarUser></NavBarUser>
      <CardLivro></CardLivro>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserMainPage;
