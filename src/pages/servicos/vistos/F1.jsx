// 📄 src/pages/servicos/vistos/F1.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function F1() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Visto F1 – Estudante',
      intro:
        'O visto F1 é destinado a estudantes estrangeiros que desejam frequentar uma instituição acadêmica nos Estados Unidos.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Orientação detalhada e checklist de documentos exigidos',
        'Preenchimento completo do formulário <strong>DS-160</strong>',
        'Pagamento e emissão do <strong>SEVIS</strong>',
        'Agendamento e instruções para entrevista no consulado',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 59.00',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'F1 Visa — Student',
      intro:
        'The F1 visa is for international students who wish to attend an academic institution in the United States.',
      includesTitle: '📋 What’s included:',
      items: [
        'Detailed guidance and checklist of required documents',
        'Complete filling of the <strong>DS-160</strong> form',
        'Payment and issuance of <strong>SEVIS</strong>',
        'Interview scheduling and consulate instructions',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 59.00',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa F1 — Estudiante',
      intro:
        'La visa F1 es para estudiantes internacionales que desean asistir a una institución académica en Estados Unidos.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Orientación detallada y checklist de documentos requeridos',
        'Relleno completo del formulario <strong>DS-160</strong>',
        'Pago y emisión del <strong>SEVIS</strong>',
        'Programación de la entrevista e instrucciones del consulado',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 59.00',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Título preferindo o i18n global (já existe em translation.json) com fallback local
  const title = t('services.visas.list.F1.title', { defaultValue: S.title });

  const waMsg = encodeURIComponent(`${S.waPrefix}${title}`);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{title}</h1>

        <p className="text-lg text-gray-700 mb-4">{S.intro}</p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{S.includesTitle}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {S.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          {S.priceLabel} <span className="text-2xl text-green-800">{S.price}</span>
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
