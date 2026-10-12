// 📄 src/components/Header.jsx
// Updated: i18n persist + links Ebooks/Documentos + active startsWith + a11y polish

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { isVisaSite } from '../config/siteMode';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);

  // language dropdown
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const langBtnRef = useRef(null);

  // user dropdown
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const userBtnRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // apply persisted language (if any)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved && saved !== (i18n.resolvedLanguage || i18n.language)) {
        i18n.changeLanguage(saved);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load user from localStorage
  useEffect(() => {
    try {
      const userStorage = localStorage.getItem('usuario');
      if (userStorage) setUsuario(JSON.parse(userStorage));
    } catch {}
  }, []);

  // re-sync user when route changes
  useEffect(() => {
    try {
      const raw = localStorage.getItem('usuario');
      setUsuario(raw ? JSON.parse(raw) : null);
    } catch {
      setUsuario(null);
    }
  }, [location.pathname]);

  // listen storage events (other tabs)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'usuario') {
        try {
          setUsuario(e.newValue ? JSON.parse(e.newValue) : null);
        } catch {
          setUsuario(null);
        }
      }
      if (e.key === 'lang' && e.newValue) {
        i18n.changeLanguage(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // close dropdowns when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
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
        setUserOpen(false);
        setIsOpen(false);
        (userOpen ? userBtnRef.current : langBtnRef.current)?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [userOpen]);

  // languages
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' }
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

  // treat route as active if starts with (covers subpages)
  const isActive = (base) => {
    const p = location.pathname;
    return p === base || p.startsWith(base + '/');
  };

  // account actions
  const handleLogout = () => {
    try {
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      localStorage.removeItem('auth');
      localStorage.removeItem('session');
    } catch {}
    setUsuario(null);
    setUserOpen(false);
    navigate('/');
  };

  const profileHref = '/perfil';
  const passwordHref = '/alterar-senha';

  // detect admin user
  const isAdmin =
    !!usuario &&
    (usuario.role_id === 1 ||
      String(usuario.role_nome || usuario.role || usuario.tipo || '')
        .toLowerCase()
        .includes('admin'));

  const visaMode = isVisaSite();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label="HelpUS - Home"
        >
          <img src="/img/helpus-logo.png" alt="HelpUS Logo" className="h-9 w-9 rounded-full object-cover shadow-sm" />
          <span>Help<span className="text-blue-500">US</span></span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-4 text-xs lg:text-sm items-center">
          <Link to="/" className={`transition hover:text-blue-400 ${isActive('/') ? 'text-blue-400' : ''}`}>Inicio</Link>
          {visaMode && (
            <Link
              to="/servicos/vistos"
              className={`rounded-full bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-500 ${isActive('/servicos/vistos') ? 'ring-2 ring-blue-300' : ''}`}
            >
              {t('menu.visa_simulator')}
            </Link>
          )}
          <Link to="/criacao-de-sites" className={`transition hover:text-blue-400 ${isActive('/criacao-de-sites') ? 'text-blue-400' : ''}`}>{t('menu.sites')}</Link>
          <Link to="/servicos/empresa" className={`transition hover:text-blue-400 ${isActive('/servicos/empresa') ? 'text-blue-400' : ''}`}>{t('menu.company')}</Link>
          <Link to="/servicos/fiscal" className={`transition hover:text-blue-400 ${isActive('/servicos/fiscal') ? 'text-blue-400' : ''}`}>{t('menu.tax')}</Link>
          <a href="/#nexosai" className="transition hover:text-blue-400">{t('menu.nexosai')}</a>
          <a href="/#portfolio" className="transition hover:text-blue-400">{t('menu.portfolio')}</a>
          <Link to="/contato" className={`transition hover:text-blue-400 ${isActive('/contato') ? 'text-blue-400' : ''}`}>Contato</Link>

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              ref={langBtnRef}
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('menu.language', { defaultValue: 'Language' })}
              title={t('menu.language', { defaultValue: 'Language' })}
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

          {/* Botão de Login Direto para a Área Administrativa */}
          <Link
            to="/admin"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-xs font-semibold text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Login Administrativo"
            title="Acessar Área Administrativa"
          >
            <FaUserCircle className="text-sm text-slate-300" />
            <span>Login</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label={t('menu.open_menu', { defaultValue: 'Toggle menu' })}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Inicio</Link>
          {visaMode && (
            <Link
              to="/servicos/vistos"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-500"
            >
              {t('menu.visa_simulator_full')}
            </Link>
          )}
          <Link to="/criacao-de-sites" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.sites_professional')}</Link>
          <Link to="/servicos/empresa" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.company_full')}</Link>
          <Link to="/servicos/fiscal" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">{t('menu.tax_full')}</Link>
          <a href="/#nexosai" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">NexosAI</a>
          <a href="/#portfolio" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Portfolio</a>
          <Link to="/ebooks" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Ebooks</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Sobre</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Contato</Link>

          {/* Language selector (mobile) */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-xs uppercase opacity-80 mb-2">
              {t('menu.language', { defaultValue: 'Language' })}
            </div>
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

          {/* Botão de Login Direto para a Área Administrativa (Mobile) */}
          <div className="pt-3 border-t border-white/10">
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md text-sm font-semibold text-white hover:text-blue-400 transition"
              aria-label="Login Administrativo"
            >
              <FaUserCircle className="text-base text-slate-300" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
