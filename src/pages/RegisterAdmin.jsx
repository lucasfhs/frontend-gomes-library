import CardCadastroAdmin from "../components/CardCadastroAdmin";
import Footer from "../components/Footer";
import Header from "../components/Header";
function RegisterAdmin() {
  return (
    <div className="flex flex-col min-h-screen justify-between gap-6">
      <Header></Header>
      <CardCadastroAdmin></CardCadastroAdmin>
      <Footer></Footer>
    </div>
  );
}

export default RegisterAdmin;
