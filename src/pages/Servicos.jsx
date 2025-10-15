// src/pages/Servicos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileAlt, FaGlobe, FaBook, FaFileSignature } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Servicos() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('home.cards.visas.title'),
      desc: t('home.cards.visas.desc'),
      icon: <FaPassport className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/servicos/vistos',
    },
    {
      title: t('home.cards.company.title'),
      desc: t('home.cards.company.desc'),
      icon: <FaBuilding className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/servicos/empresa',
    },
    {
      title: t('home.cards.tax.title'),
      desc: t('home.cards.tax.desc'),
      icon: <FaFileAlt className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/servicos/fiscal',
    },
    {
      title: t('home.cards.sites.title'),
      desc: t('home.cards.sites.desc'),
      icon: <FaGlobe className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/criacao-de-sites',
    },
    // 🆕 Documentos & Tradução
    {
      title: t('home.cards.docs.title'),
      desc: t('home.cards.docs.desc'),
      icon: <FaFileSignature className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/servicos/documentos',
    },
    // 🆕 Ebooks
    {
      title: t('home.cards.ebooks.title'),
      desc: t('home.cards.ebooks.desc'),
      icon: <FaBook className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      href: '/ebooks',
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800" data-aos="fade-down">
          {t('home.services_title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Link
              to={c.href}
              key={c.href}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              aria-label={c.title}
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
