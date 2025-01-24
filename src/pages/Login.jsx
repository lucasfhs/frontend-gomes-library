import { BookCheck } from "lucide-react";
import CardLogin from "../components/CardLogin";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      {/* Main Content */}
      <div className="flex flex-col items-center  justify-center flex-grow">
        <h1 className="text-center text-4xl p-4 font-thin">Faça Seu Login</h1>
        <div className="container mx-auto">
          <CardLogin></CardLogin>
        </div>
      </div>
      <div class="mt-10">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Login;
