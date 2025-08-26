// 📄 src/pages/servicos/vistos/F2.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function F2() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Visto F2 – Dependente de Estudante',
      intro:
        'O visto F2 é destinado a cônjuges e filhos não casados de portadores do visto F1, permitindo que acompanhem o estudante durante sua permanência nos Estados Unidos.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Preparação e preenchimento completo do formulário <strong>DS-160</strong>;',
        'Checklist e documentação de vínculo com o titular do F1;',
        'Agendamento da entrevista no consulado e orientações específicas;',
        'Suporte para dependentes menores e cônjuges durante todo o processo.',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: 'US$ 49.00',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'F2 Visa — Dependent of Student',
      intro:
        'The F2 visa is for spouses and unmarried children of F1 visa holders, allowing them to accompany the student during their stay in the United States.',
      includesTitle: '📋 What’s included:',
      items: [
        'Complete preparation and filling of the <strong>DS-160</strong> form;',
        'Checklist and documentation proving relationship to the F1 holder;',
        'Consular interview scheduling and specific guidance;',
        'Support for minors and spouses throughout the process.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 49.00',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Visa F2 — Dependiente de Estudiante',
      intro:
        'La visa F2 está destinada a cónyuges e hijos solteros de titulares de la visa F1, permitiéndoles acompañar al estudiante durante su estadía en Estados Unidos.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Relleno completo del formulario <strong>DS-160</strong>;',
        'Checklist y documentación que acrediten el vínculo con el titular F1;',
        'Programación de la entrevista consular e indicaciones específicas;',
        'Soporte para menores y cónyuges durante todo el proceso.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 49.00',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chave global quando existir; cair no fallback local se não houver
  const title = t('services.visas.list.F2.title', { defaultValue: S.title });
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
