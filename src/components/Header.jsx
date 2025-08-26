// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('usuario');
    if (userStorage) setUsuario(JSON.parse(userStorage));
  }, []);

  // fechar dropdown ao clicar fora
  useEffect(() => {
    const onDoc = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
    };
  }, []);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
  ];
  const current = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Help<span className="text-blue-500">US</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link to="/" className="hover:text-blue-400 transition">{t('menu.home')}</Link>
          <Link to="/servicos" className="hover:text-blue-400 transition">{t('menu.services')}</Link>
          <Link to="/criacao-de-sites" className="hover:text-blue-400 transition">{t('menu.site_build')}</Link>
          <Link to="/sobre" className="hover:text-blue-400 transition">{t('menu.about')}</Link>
          <Link to="/contato" className="hover:text-blue-400 transition">{t('menu.contact')}</Link>

          {/* Seletor de idioma */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md"
              aria-label="Language selector"
            >
              <span className="uppercase text-xs tracking-wide">{current.code}</span>
              <FaChevronDown className="text-xs" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                      l.code === current.code ? 'font-semibold' : ''
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

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
              title={t('menu.login')}
            >
              <FaUserCircle className="text-lg" />
              {t('menu.login')}
            </Link>
          )}
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.home')}</Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.services')}</Link>
          <Link to="/criacao-de-sites" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.site_build')}</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.about')}</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.contact')}</Link>

          {/* Seletor de idioma (mobile) */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-xs uppercase opacity-80 mb-2">Language</div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { changeLang(l.code); setIsOpen(false); }}
                  className={`py-2 rounded-md border text-sm ${
                    l.code === current.code
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 flex items-center gap-2">
            <FaUserCircle /> {t('menu.login')}
          </Link>
        </div>
      )}
    </header>
  );
}
