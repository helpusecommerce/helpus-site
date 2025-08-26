// 📄 src/pages/servicos/vistos/Familia.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Familia() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Visto Familiar – Pais, Cônjuges e Filhos',
      intro:
        'Oferecemos suporte completo para a solicitação de vistos familiares, seja para acompanhar um estudante, trabalhador ou residente nos EUA, ou para visitas temporárias de reunião familiar.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Definição do tipo de visto adequado (<strong>F2, B2, IR</strong>, entre outros);',
        'Checklist completo de documentos familiares exigidos;',
        'Preenchimento dos formulários necessários (como <strong>DS-160</strong>);',
        'Agendamento da entrevista consular e orientações detalhadas;',
        'Suporte contínuo até a finalização do processo.',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 55.00',
      priceNote: '– para cada membro da família.',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'Family Visa — Parents, Spouses and Children',
      intro:
        'We provide end-to-end support for family visa applications—whether to accompany a student, worker or U.S. resident, or for temporary family reunions.',
      includesTitle: '📋 What’s included:',
      items: [
        'Definition of the appropriate visa type (<strong>F2, B2, IR</strong>, etc.);',
        'Full checklist of required family documents;',
        'Completion of the necessary forms (such as <strong>DS-160</strong>);',
        'Consular interview scheduling and detailed guidance;',
        'Ongoing support until the process is completed.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 55.00',
      priceNote: '– per family member.',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa Familiar — Padres, Cónyuges e Hijos',
      intro:
        'Brindamos soporte integral para solicitudes de visas familiares, ya sea para acompañar a un estudiante, trabajador o residente en EE. UU., o para reuniones familiares temporales.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Definición del tipo de visa adecuado (<strong>F2, B2, IR</strong>, etc.);',
        'Checklist completo de documentos familiares requeridos;',
        'Relleno de los formularios necesarios (como <strong>DS-160</strong>);',
        'Programación de la entrevista consular e indicaciones detalladas;',
        'Soporte continuo hasta la finalización del proceso.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 55.00',
      priceNote: '– por cada miembro de la familia.',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir as chaves globais quando existirem
  const title = t('services.visas.list.Familia.title', { defaultValue: S.title });
  const includesTitle = t('services.visas.includes_title', { defaultValue: S.includesTitle });

  const waMsg = encodeURIComponent(`${S.waPrefix}${title}`);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{title}</h1>

        <p className="text-lg text-gray-700 mb-4">{S.intro}</p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{includesTitle}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {S.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          {S.priceLabel}{' '}
          <span className="text-2xl text-green-800">{S.price}</span>{' '}
          <span className="text-gray-700">{S.priceNote}</span>
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
