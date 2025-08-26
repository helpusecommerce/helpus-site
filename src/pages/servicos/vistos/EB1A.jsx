// 📄 src/pages/servicos/vistos/EB1A.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EB1A() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (mova para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Visto EB1-A – Habilidade Extraordinária',
      intro:
        'O visto EB1-A é destinado a pessoas com habilidades extraordinárias em ciência, arte, educação, negócios ou esportes, com reconhecimento nacional ou internacional.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Análise inicial de perfil e elegibilidade;',
        'Orientações detalhadas para documentação comprobatória;',
        'Preenchimento do formulário <strong>I-140</strong> e montagem do dossiê;',
        'Traduções e estruturação de provas de notoriedade.',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 79.00',
      priceNote: '– suporte completo até o envio da petição.',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'EB1-A Visa — Extraordinary Ability',
      intro:
        'The EB1-A visa is for individuals with extraordinary ability in sciences, arts, education, business, or athletics, with national or international acclaim.',
      includesTitle: '📋 What’s included:',
      items: [
        'Initial profile assessment and eligibility;',
        'Detailed guidance for supporting evidence;',
        'Completion of <strong>I-140</strong> and full petition assembly;',
        'Translations and structuring of notoriety evidence.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 79.00',
      priceNote: '– full support through petition filing.',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa EB1-A — Habilidad Extraordinaria',
      intro:
        'La visa EB1-A está destinada a personas con habilidad extraordinaria en ciencias, artes, educación, negocios o deportes, con reconocimiento nacional o internacional.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Análisis inicial del perfil y elegibilidad;',
        'Orientación detallada para la documentación probatoria;',
        'Relleno del <strong>I-140</strong> y armado completo de la petición;',
        'Traducciones y estructuración de evidencias de notoriedad.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 79.00',
      priceNote: '– soporte completo hasta el envío de la petición.',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chaves globais quando existirem
  const title = t('services.visas.list.EB1A.title', { defaultValue: S.title });
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
