
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-800">HelpUS</div>
        <ul className="flex space-x-6 text-blue-700 font-medium">
          <li>
            <Link to="/" className="hover:underline">Início</Link>
          </li>
          <li>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
          </li>
          <li>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
