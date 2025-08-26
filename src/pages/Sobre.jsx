// src/pages/Sobre.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Sobre() {
  const { t } = useTranslation();

  const blocks = [
    { key: 'exp', aos: 'fade-right' },
    { key: 'pers', aos: 'fade-up' },
    { key: 'commit', aos: 'fade-left' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          {t('about.title')}
        </h2>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {t('about.intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
          {blocks.map(({ key, aos }) => (
            <div key={key} data-aos={aos} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {t(`about.blocks.${key}_t`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`about.blocks.${key}_d`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
