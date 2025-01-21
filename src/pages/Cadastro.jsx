import CardCadastro from "../components/CardCadastro";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Cadastro() {
  return (
    <div className="flex flex-col min-h-screen gap-6">
      <Header></Header>
      <CardCadastro></CardCadastro>
      <Footer></Footer>
    </div>
  );
}

export default Cadastro;
