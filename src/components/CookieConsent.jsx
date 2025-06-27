import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
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

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="flex-1 text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa&nbsp;
          <Link to="/politica-de-privacidade" className="underline text-blue-400 hover:text-blue-300">
            Política de Privacidade
          </Link>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
