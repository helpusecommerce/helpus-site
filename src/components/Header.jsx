import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          HelpUS
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium">
            Início
          </Link>
          <Link to="/servicos" className="text-gray-700 hover:text-blue-800 font-medium">
            Serviços
          </Link>
          <Link to="/sobre" className="text-gray-700 hover:text-blue-800 font-medium">
            Sobre
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-blue-800 font-medium">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
