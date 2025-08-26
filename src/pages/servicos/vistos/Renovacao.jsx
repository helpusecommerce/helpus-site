// 📄 src/pages/servicos/vistos/Renovacao.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Renovacao() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (mova para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Renovação de Visto',
      intro:
        'Se o seu visto americano está vencido ou próximo do vencimento, a HelpUS oferece suporte completo para renovar com segurança e agilidade, reduzindo erros e atrasos no processo.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Atualização de dados e preenchimento do novo <strong>DS-160</strong>;',
        'Verificação de elegibilidade para isenção de entrevista;',
        'Agendamento no CASV ou consulado, se necessário;',
        'Checklist atualizado de documentos exigidos;',
        'Orientações até a devolução do passaporte com o visto.',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 39.00',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'Visa Renewal',
      intro:
        'If your U.S. visa is expired or about to expire, HelpUS provides end-to-end support to renew it safely and quickly, reducing errors and delays.',
      includesTitle: '📋 What’s included:',
      items: [
        'Updating data and completing the new <strong>DS-160</strong>;',
        'Checking eligibility for interview waiver;',
        'Scheduling at ASC or consulate, if needed;',
        'Updated checklist of required documents;',
        'Guidance through passport return with the visa.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 39.00',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Renovación de Visa',
      intro:
        'Si tu visa de EE. UU. está vencida o por vencer, HelpUS brinda soporte completo para renovarla con seguridad y agilidad, reduciendo errores y demoras.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Actualización de datos y relleno del nuevo <strong>DS-160</strong>;',
        'Verificación de elegibilidad para exención de entrevista;',
        'Programación en el ASC o consulado, si es necesario;',
        'Checklist actualizado de documentos requeridos;',
        'Orientaciones hasta la devolución del pasaporte con la visa.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 39.00',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chaves globais quando existirem
  const title = t('services.visas.list.Renovacao.title', { defaultValue: S.title });
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
