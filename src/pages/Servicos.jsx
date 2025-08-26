// 📄 src/components/Servicos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileAlt, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Servicos() {
  const { t } = useTranslation();

  const servicos = [
    {
      titulo: t('home.cards.visas.title'),
      descricao: t('home.cards.visas.desc'),
      icone: <FaPassport className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/vistos',
    },
    {
      titulo: t('home.cards.company.title'),
      descricao: t('home.cards.company.desc'),
      icone: <FaBuilding className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/empresa',
    },
    {
      titulo: t('home.cards.tax.title'),
      descricao: t('home.cards.tax.desc'),
      icone: <FaFileAlt className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/fiscal',
    },
    {
      titulo: t('home.cards.sites.title'),
      descricao: t('home.cards.sites.desc'),
      icone: <FaGlobe className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/criacao-de-sites',
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800" data-aos="fade-down">
          {t('home.services_title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicos.map((item, index) => (
            <Link
              to={item.link}
              key={item.link}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              aria-label={item.titulo}
            >
              <div className="mb-4">{item.icone}</div>
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.descricao}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
