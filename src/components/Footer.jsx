import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Marca, Links, Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Marca */}
          <div className="text-2xl font-bold text-white">
            Help<span className="text-blue-500">US</span>
          </div>

          {/* Links rápidos */}
          <nav className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400 transition">Início</Link>
            <Link to="/servicos" className="hover:text-blue-400 transition">Serviços</Link>
            <Link to="/criacao-de-sites" className="hover:text-blue-400 transition">Criação de Sites</Link>
            <Link to="/sobre" className="hover:text-blue-400 transition">Sobre</Link>
            <Link to="/contato" className="hover:text-blue-400 transition">Contato</Link>
          </nav>

          {/* Redes sociais com fundo circular e sombra */}
          <div className="flex gap-3">
            <a
              href="https://youtube.com/@helpususa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-red-600 transition-transform transform hover:scale-110"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="https://www.tiktok.com/@helpususa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-black transition-transform transform hover:scale-110"
            >
              <FaTiktok className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com/helpususa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://linkedin.com/company/helpususa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center gap-4">
          <p className="text-lg text-center font-semibold">
            Receba novidades e dicas sobre vistos, empresas, impostos e sites profissionais
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Inscrever
            </button>
          </form>
        </div>

        {/* Contato */}
        <div className="text-center text-sm text-gray-400">
          <p>Endereço: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EUA</p>
          <p>Email: helpus.ecommerce@gmail.com</p>
        </div>

        {/* Rodapé final */}
        <div className="text-center text-xs text-gray-500 mt-4 space-y-1">
          <p>© {new Date().getFullYear()} HelpUS LLC. Todos os direitos reservados.</p>
          <p className="text-gray-400">Feito com <span className="text-red-500">♥</span> pela HelpUS</p>
        </div>
      </div>
    </footer>
  );
}
