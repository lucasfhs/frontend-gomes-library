import { BookCheck } from "lucide-react";
import CardLoginAdmin from "../components/CardLoginAdmin";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      {/* Main Content */}
      <div className="flex flex-col items-center bg-gray-800 justify-center flex-grow pt-2 pb-10">
        <h1 className="text-center text-4xl py-6 text-white font-publicSans font-thin">
          Bem vindo(a) Admin
        </h1>
        <div className="container mx-auto">
          <CardLoginAdmin></CardLoginAdmin>
        </div>
      </div>
      <div className="">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Login;
