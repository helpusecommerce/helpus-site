// 📄 src/pages/servicos/vistos/CasosEspeciais.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CasosEspeciais() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Casos Especiais (Waiver, Deportação e Extensões)',
      intro:
        'Atuamos em situações mais complexas que exigem cuidado jurídico e estratégias específicas para cada caso.',
      examplesTitle: '📋 Exemplos de casos atendidos:',
      items: [
        'Pedidos de <strong>perdão (waiver)</strong> por vistos negados ou presença ilegal;',
        'Solicitação de <strong>extensão</strong> ou <strong>mudança de status</strong> já nos EUA;',
        'Acompanhamento em processos de <strong>deportação</strong> ou <strong>inadmissibilidade</strong>;',
        'Consultas personalizadas com análise de riscos e alternativas.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'Sob consulta',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'Special Cases (Waiver, Removal, Extensions)',
      intro:
        'We handle complex situations that require legal care and tailored strategies for each case.',
      examplesTitle: '📋 Examples of cases handled:',
      items: [
        'Requests for <strong>waivers</strong> due to visa denials or unlawful presence;',
        'Applications for <strong>extension</strong> or <strong>change of status</strong> while in the U.S.;',
        'Support in <strong>removal</strong> or <strong>inadmissibility</strong> proceedings;',
        'Personalized consultations with risk analysis and alternatives.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'On request',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Casos Especiales (Waiver, Deportación y Extensiones)',
      intro:
        'Actuamos en situaciones complejas que requieren cuidado jurídico y estrategias específicas para cada caso.',
      examplesTitle: '📋 Ejemplos de casos atendidos:',
      items: [
        'Solicitudes de <strong>waiver</strong> por visas denegadas o presencia ilegal;',
        'Solicitud de <strong>extensión</strong> o <strong>cambio de estatus</strong> dentro de EE. UU.;',
        'Acompañamiento en procesos de <strong>deportación</strong> o <strong>inadmisibilidad</strong>;',
        'Consultas personalizadas con análisis de riesgos y alternativas.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'A consultar',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chaves globais quando existirem
  const title = t('services.visas.list.CasosEspeciais.title', { defaultValue: S.title });
  const examplesTitle = t('services.visas.examples_title', { defaultValue: S.examplesTitle });
  const priceLabel = t('services.visas.pages.CasosEspeciais.price_label', { defaultValue: S.priceLabel });
  const price = t('services.visas.pages.CasosEspeciais.price', { defaultValue: S.price });
  const intro = t('services.visas.pages.CasosEspeciais.intro', { defaultValue: S.intro });

  // Itens (usa i18n quando existir, senão cai no fallback local)
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.visas.pages.CasosEspeciais.items.${i}`, { defaultValue: S.items[i] })
  );

  const waMsg = encodeURIComponent(`${S.waPrefix}${title}`);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{title}</h1>

        <p className="text-lg text-gray-700 mb-4">{intro}</p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{examplesTitle}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          {priceLabel}{' '}
          <span className="text-2xl text-green-800">{price}</span>
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
