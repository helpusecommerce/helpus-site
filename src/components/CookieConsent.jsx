// src/components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  // ajuste de rota por idioma (altere se suas rotas forem outras)
  const privacyPathByLang = {
    pt: '/politica-de-privacidade',
    en: '/privacy',
    es: '/es/politica-de-privacidad',
  };
  const privacyPath = privacyPathByLang[i18n.language] || '/privacy';

  return (
    <div
      key={i18n.language} // força re-render quando o idioma mudar
      className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md"
      role="region"
      aria-live="polite"
      aria-label={t('cookie.banner_label', { defaultValue: 'Cookies notice' })}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="flex-1 text-center md:text-left">
          {t('cookie.message', {
            defaultValue:
              'We use cookies to improve your experience. By continuing, you agree to our',
          })}{' '}
          <Link
            to={privacyPath}
            className="underline text-blue-400 hover:text-blue-300"
          >
            {t('cookie.privacy', { defaultValue: 'Privacy Policy' })}
          </Link>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          {t('cookie.accept', { defaultValue: 'Accept' })}
        </button>
      </div>
    </div>
  );
}
