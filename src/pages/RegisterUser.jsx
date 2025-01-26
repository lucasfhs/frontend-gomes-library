import CardCadastroUser from "../components/CardCadastroUser";
import Footer from "../components/Footer";
import Header from "../components/Header";
function RegisterUser() {
  return (
    <div className="flex flex-col min-h-screen gap-6">
      <Header></Header>
      <CardCadastroUser></CardCadastroUser>
      <Footer></Footer>
    </div>
  );
}

export default RegisterUser;
