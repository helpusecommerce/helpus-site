// 📄 src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import nhost from '../nhost';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [msgTipo, setMsgTipo] = useState('info'); // 'success' | 'error' | 'info'
  const [loading, setLoading] = useState(false);

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val || '').trim());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMsgTipo('error');
      setMensagem(t('footer.newsletter.error_invalid', { defaultValue: 'Informe um e-mail válido.' }));
      clearMsgLater();
      return;
    }

    try {
      setLoading(true);
      const { error } = await nhost.graphql.request(`
        mutation AddEmail {
          insert_newsletter_one(object: { email: "${email}" }) {
            id
          }
        }
      `);

      if (error) {
        setMsgTipo('error');
        setMensagem(t('footer.newsletter.error_exists'));
      } else {
        setMsgTipo('success');
        setMensagem(t('footer.newsletter.success'));
        setEmail('');
      }
    } catch (err) {
      setMsgTipo('error');
      setMensagem(t('footer.newsletter.error_conn'));
    } finally {
      setLoading(false);
      clearMsgLater();
    }
  };

  const clearMsgLater = () => {
    setTimeout(() => {
      setMensagem('');
      setMsgTipo('info');
    }, 4000);
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Cabeçalho, links e redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white">
            Help<span className="text-blue-500">US</span>
          </div>

          {/* LINKS DO RODAPÉ */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
            <Link to="/" className="hover:text-blue-400 transition">{t('menu.home')}</Link>
            <Link to="/servicos" className="hover:text-blue-400 transition">{t('menu.services')}</Link>
            <Link to="/servicos/documentos" className="hover:text-blue-400 transition">
              {t('menu.documents', { defaultValue: 'Documentos' })}
            </Link>
            <Link to="/ebooks" className="hover:text-blue-400 transition">
              {t('menu.ebooks', { defaultValue: 'Ebooks' })}
            </Link>
            <Link to="/criacao-de-sites" className="hover:text-blue-400 transition">{t('menu.site_build')}</Link>
            <Link to="/sobre" className="hover:text-blue-400 transition">{t('menu.about')}</Link>
            <Link to="/contato" className="hover:text-blue-400 transition">{t('menu.contact')}</Link>
          </nav>

          {/* REDES SOCIAIS */}
          <div className="flex gap-3">
            <a
              href="https://youtube.com/@helpususa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-red-600 transition-transform transform hover:scale-110"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="https://www.tiktok.com/@helpususa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-black transition-transform transform hover:scale-110"
            >
              <FaTiktok className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com/helpususa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://linkedin.com/company/helpususa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center gap-4">
          <p className="text-lg text-center font-semibold">
            {t('footer.newsletter.title')}
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {t('footer.newsletter.placeholder')}
            </label>
            <input
              id="newsletter-email"
              type="email"
              inputMode="email"
              placeholder={t('footer.newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? t('footer.newsletter.sending', { defaultValue: 'Enviando...' }) : t('footer.newsletter.button')}
            </button>
          </form>
          {!!mensagem && (
            <p
              className={`text-sm text-center ${
                msgTipo === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
              role={msgTipo === 'error' ? 'alert' : undefined}
            >
              {mensagem}
            </p>
          )}
        </div>

        {/* Contato */}
        <div className="text-center text-sm text-gray-400">
          <p>{t('footer.contact.address')}</p>
          <p>{t('footer.contact.email')}</p>
        </div>

        {/* Rodapé final */}
        <div className="text-center text-xs text-gray-500 mt-4 space-y-1">
          <p>
            © {new Date().getFullYear()} {t('brand')} LLC. {t('footer.rights')}
          </p>
          <p className="text-gray-400">
            {t('footer.made_with')} <span className="text-red-500">♥</span> {t('footer.by_helpus')}
          </p>
        </div>
      </div>
    </footer>
  );
}
