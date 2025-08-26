// 📄 src/pages/servicos/vistos/EB2NIW.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EB2NIW() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Visto EB2-NIW – Dispensa de Oferta de Trabalho',
      intro:
        'O visto EB2-NIW é destinado a profissionais qualificados que desejam imigrar para os EUA com base em seu mérito profissional, sem a necessidade de uma oferta de trabalho direta, desde que comprovem benefício substancial ao interesse nacional americano.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Análise detalhada de elegibilidade com base no seu currículo;',
        'Preenchimento do formulário <strong>I-140</strong> e elaboração da carta de interesse nacional;',
        'Organização da documentação de diplomas, experiência e impacto;',
        'Orientações para obtenção do <strong>Green Card</strong> via ajuste de status ou processo consular.',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 69.00',
      priceNote: '– suporte completo até o envio do I-140.',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'EB2-NIW Visa — National Interest Waiver',
      intro:
        'The EB2-NIW visa is for qualified professionals who wish to immigrate to the U.S. based on their professional merit without a direct job offer, provided they demonstrate substantial benefit to the U.S. national interest.',
      includesTitle: '📋 What’s included:',
      items: [
        'Detailed eligibility assessment based on your résumé;',
        'Completion of <strong>I-140</strong> and drafting of the national interest statement;',
        'Organization of diplomas, experience and impact documentation;',
        'Guidance to obtain the <strong>Green Card</strong> via adjustment of status or consular processing.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 69.00',
      priceNote: '– full support through I-140 filing.',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa EB2-NIW — Exención por Interés Nacional',
      intro:
        'La visa EB2-NIW es para profesionales calificados que desean inmigrar a EE. UU. en base a su mérito profesional, sin una oferta de trabajo directa, siempre que demuestren un beneficio sustancial al interés nacional.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Análisis detallado de elegibilidad según tu currículum;',
        'Relleno del <strong>I-140</strong> y redacción de la carta de interés nacional;',
        'Organización de documentación de títulos, experiencia e impacto;',
        'Orientaciones para obtener la <strong>Green Card</strong> vía ajuste de estatus o proceso consular.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 69.00',
      priceNote: '– soporte completo hasta el envío del I-140.',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chaves globais quando existirem
  const title = t('services.visas.list.EB2NIW.title', { defaultValue: S.title });
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
