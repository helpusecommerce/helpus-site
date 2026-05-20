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
          className="text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label="HelpUS - Home"
        >
          Help<span className="text-blue-500">US</span>
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

          {/* Account - Ícone sempre; dropdown muda conforme login */}
          <div className="relative" ref={userRef}>
            <button
              ref={userBtnRef}
              onClick={() => setUserOpen((v) => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="menu"
              aria-expanded={userOpen}
              aria-label={t('menu.login', { defaultValue: 'Account' })}
              title={usuario?.email || ''}
            >
              <FaUserCircle className={`text-lg ${usuario ? 'text-green-400' : ''}`} />
              <FaChevronDown className="text-xs opacity-70" />
            </button>

            {userOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
                role="menu"
              >
                {usuario ? (
                  <>
                    {/* Cabeçalho com nome + e-mail */}
                    <div className="px-4 py-2 text-xs text-gray-500 border-b">
                      <div className="font-semibold text-gray-800 truncate">
                        {usuario.nome || usuario.name || usuario.fullname || usuario.email}
                      </div>
                      <div className="truncate">{usuario.email}</div>
                    </div>

                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setUserOpen(false)}
                        role="menuitem"
                      >
                        {t('account.admin', { defaultValue: 'Admin' })}
                      </Link>
                    )}
                    <Link
                      to={profileHref}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      {t('account.profile', { defaultValue: 'Perfil' })}
                    </Link>
                    <Link
                      to={passwordHref}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      {t('account.change_password', { defaultValue: 'Alterar senha' })}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 border-t"
                      role="menuitem"
                    >
                      {t('account.logout', { defaultValue: 'Sair' })}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      {t('menu.login')}
                    </Link>
                    <Link
                      to="/esqueci-senha"
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      {t('menu.forgot')}
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
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

          {/* Account (mobile) */}
          {usuario ? (
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <FaUserCircle className="text-lg" />
                <span className="truncate" title={usuario.email}>
                  {usuario.nome || usuario.name || usuario.fullname || usuario.email}
                </span>
              </div>
              <div className="grid gap-2">
                {isAdmin && (
                  <Link to="/admin" onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                    {t('account.admin', { defaultValue: 'Admin' })}
                  </Link>
                )}
                <Link to={profileHref} onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                  {t('account.profile', { defaultValue: 'Perfil' })}
                </Link>
                <Link to={passwordHref} onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                  {t('account.change_password', { defaultValue: 'Alterar senha' })}
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="block text-left bg-white/10 px-3 py-2 rounded"
                >
                  {t('account.logout', { defaultValue: 'Sair' })}
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-white/10 grid gap-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 flex items-center gap-2">
                <FaUserCircle /> {t('menu.login')}
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
