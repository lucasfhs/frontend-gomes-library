import React from "react";

function Footer() {
  return (
    <footer className="bg-rich-black text-mint-green py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold text-spring-green mb-2">
              Bibliotecas Gomes
            </h1>
            <p className="text-india-green text-sm">
              Sua central de leitura e aprendizado desde 2025.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h2 className="text-lg font-semibold text-spring-green mb-4">
                Recursos
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-spring-green mb-4">
                Ajuda
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Suporte
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-india-green mt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
          <p className="text-center md:text-left">
            &copy; 2025 Bibliotecas Gomes. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-spring-green transition-colors duration-200"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="hover:text-spring-green transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
