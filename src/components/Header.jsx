import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Tenta buscar o usuário salvo no localStorage
    const userStorage = localStorage.getItem('usuario');
    if (userStorage) {
      setUsuario(JSON.parse(userStorage));
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Help<span className="text-blue-500">US</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link to="/" className="hover:text-blue-400 transition">Início</Link>
          <Link to="/servicos" className="hover:text-blue-400 transition">Serviços</Link>
          <Link to="/criacao-de-sites" className="hover:text-blue-400 transition">Criação de Sites</Link>
          <Link to="/sobre" className="hover:text-blue-400 transition">Sobre</Link>
          <Link to="/contato" className="hover:text-blue-400 transition">Contato</Link>

          {/* Ícone/Login */}
          {usuario ? (
            <span className="flex items-center gap-2 text-green-400 text-sm">
              <FaUserCircle className="text-lg" />
              {usuario.email}
            </span>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-blue-400 transition"
              title="Área restrita"
            >
              <FaUserCircle className="text-lg" />
              Login
            </Link>
          )}
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Início</Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Serviços</Link>
          <Link to="/criacao-de-sites" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Criação de Sites</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Sobre</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Contato</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 flex items-center gap-2">
            <FaUserCircle /> Área Restrita
          </Link>
        </div>
      )}
    </header>
  );
}
