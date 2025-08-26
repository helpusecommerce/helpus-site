// 📄 src/pages/servicos/vistos/B1B2.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function B1B2() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (para esta página específica)
  const S = {
    pt: {
      title: 'Visto B1/B2 – Turista e Negócios',
      intro:
        'O visto <strong>B1/B2</strong> é indicado para viagens temporárias aos Estados Unidos a turismo, negócios ou visitas a familiares e amigos.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Preenchimento completo do formulário <strong>DS-160</strong>;',
        'Preparação e checklist dos documentos de apoio;',
        'Agendamento da entrevista consular e instruções detalhadas;',
        'Orientações para aumentar suas chances de aprovação.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'US$ 45.00',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'B1/B2 Visa — Tourism & Business',
      intro:
        'The <strong>B1/B2</strong> visa is for temporary travel to the United States for tourism, business, or visiting family and friends.',
      includesTitle: '📋 What’s included:',
      items: [
        'Complete filling of the <strong>DS-160</strong> form;',
        'Preparation and checklist of supporting documents;',
        'Consular interview scheduling and detailed instructions;',
        'Guidance to improve your chances of approval.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 45.00',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa B1/B2 — Turismo y Negocios',
      intro:
        'La visa <strong>B1/B2</strong> es para viajes temporales a EE. UU. por turismo, negocios o visita a familiares y amigos.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Relleno completo del formulario <strong>DS-160</strong>;',
        'Preparación y checklist de documentos de respaldo;',
        'Programación de la entrevista consular e instrucciones detalladas;',
        'Orientaciones para aumentar tus probabilidades de aprobación.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 45.00',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Se preferir, você pode mover esses textos para translation.json depois
  const waMsg = encodeURIComponent(`${S.waPrefix}${S.title}`);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          {S.title}
        </h1>

        <p
          className="text-lg text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: S.intro }}
        />

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          {S.includesTitle}
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {S.items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          {S.priceLabel}{' '}
          <span className="text-2xl text-green-800">{S.price}</span>
        </div>

        <a
          href={`https://wa.me/5583998721848?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          {t('services.company.AberturaLLC.cta', { defaultValue: 'Contratar agora via WhatsApp' })}
        </a>
      </div>
    </section>
  );
}
