import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaFileInvoiceDollar,
  FaWhatsapp,
  FaGlobe,
  FaHandshake,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();

  // aplica idioma salvo no primeiro render
  React.useEffect(() => {
    const saved = localStorage.getItem('helpus_lang');
    const current = i18n.language?.slice(0, 2);
    if (saved && saved !== current) {
      i18n.changeLanguage(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = current || 'pt';
    }
  }, [i18n]);

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('helpus_lang', lng);
    document.documentElement.lang = lng;
  };

  const cur = i18n.language?.slice(0, 2);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">

      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Miami.mp4" type="video/mp4" />
        {t('hero.no_video')}
      </video>

      {/* Camada escura para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* ===== Seletor de Idiomas (canto superior direito) ===== */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        {['pt', 'en', 'es'].map((lng) => (
          <button
            key={lng}
            onClick={() => setLang(lng)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition border ${
              cur === lng
                ? 'bg-blue-600 border-blue-600 text-white shadow'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
            aria-pressed={cur === lng}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-4xl mx-auto py-10 sm:py-20 px-4">

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/servicos/empresa"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaBuilding /> {t('hero.cta.company')}
          </Link>
          <Link
            to="/servicos/fiscal"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaFileInvoiceDollar /> {t('hero.cta.tax')}
          </Link>
          <Link
            to="/criacao-de-sites"
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaGlobe /> {t('hero.cta.sites')}
          </Link>

          <Link
            to="/parceiros"
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaHandshake /> {t('common.partners')}
          </Link>
        </motion.div>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/15551234567"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
}
