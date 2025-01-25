import Advertising from "../components/Advertising";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardWebsiteAccess from "../components/CardWebsiteAccess";
function LandingPage() {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-900">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <Advertising />
        <CardWebsiteAccess />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
