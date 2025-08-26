// 📄 src/components/Header.jsx
// Updated: robust i18n switcher (desktop/mobile), a11y, persistence, and ESC-to-close
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  // load user from localStorage
  useEffect(() => {
    try {
      const userStorage = localStorage.getItem('usuario');
      if (userStorage) setUsuario(JSON.parse(userStorage));
    } catch {}
  }, []);

  // close language dropdown when clicking outside
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

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
        setIsOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // keep selected lang between navigations (i18n already writes localStorage via i18n.js)
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
  ];
  const currentCode = i18n.resolvedLanguage || i18n.language || 'en';
  const current = languages.find((l) => l.code === currentCode) || languages[0];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    try {
      localStorage.setItem('lang', code);
    } catch {}
    setLangOpen(false);
  };

  // utility to mark active link
  const isActive = (to) => location.pathname === to;

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        >
          Help<span className="text-blue-500">US</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link
            to="/"
            className={`transition hover:text-blue-400 ${isActive('/') ? 'text-blue-400' : ''}`}
          >
            {t('menu.home')}
          </Link>
          <Link
            to="/servicos"
            className={`transition hover:text-blue-400 ${isActive('/servicos') ? 'text-blue-400' : ''}`}
          >
            {t('menu.services')}
          </Link>
          <Link
            to="/criacao-de-sites"
            className={`transition hover:text-blue-400 ${isActive('/criacao-de-sites') ? 'text-blue-400' : ''}`}
          >
            {t('menu.site_build')}
          </Link>
          <Link
            to="/sobre"
            className={`transition hover:text-blue-400 ${isActive('/sobre') ? 'text-blue-400' : ''}`}
          >
            {t('menu.about')}
          </Link>
          <Link
            to="/contato"
            className={`transition hover:text-blue-400 ${isActive('/contato') ? 'text-blue-400' : ''}`}
          >
            {t('menu.contact')}
          </Link>

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              ref={btnRef}
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Language selector"
            >
              <span className="uppercase text-xs tracking-wide">{current.code}</span>
              <FaChevronDown className="text-xs" />
            </button>
            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
                role="listbox"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    role="option"
                    aria-selected={l.code === current.code}
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

          {/* Auth indicator */}
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

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.home')}
          </Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.services')}
          </Link>
          <Link
            to="/criacao-de-sites"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400"
          >
            {t('menu.site_build')}
          </Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.about')}
          </Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.contact')}
          </Link>

          {/* Language selector (mobile) */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-xs uppercase opacity-80 mb-2">Language</div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    changeLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`py-2 rounded-md border text-sm ${
                    l.code === current.code
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                  aria-pressed={l.code === current.code}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 flex items-center gap-2"
          >
            <FaUserCircle /> {t('menu.login')}
          </Link>
        </div>
      )}
    </header>
  );
}
