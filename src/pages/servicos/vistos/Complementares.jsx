// 📄 src/pages/servicos/vistos/Complementares.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Complementares() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks completos por idioma (pode mover para translation.json quando quiser)
  const S = {
    pt: {
      title: 'Documentos Complementares',
      intro:
        'Emitimos e preparamos documentos auxiliares que fortalecem sua solicitação de visto ou processo migratório.',
      examplesTitle: '📋 Exemplos de documentos:',
      items: [
        'Formulário <strong>I-134 (Affidavit of Support)</strong>;',
        'Cartas explicativas, declarações e justificativas personalizadas;',
        'Comprovações financeiras e de vínculo familiar ou profissional.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'US$ 25.00',
      priceNote: 'por documento (com personalização e revisão).',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
    },
    en: {
      title: 'Complementary Documents',
      intro:
        'We prepare supporting documents that strengthen your visa application or immigration process.',
      examplesTitle: '📋 Example documents:',
      items: [
        'Form <strong>I-134 (Affidavit of Support)</strong>;',
        'Explanatory letters, statements, and tailored justifications;',
        'Financial evidence and proof of family or professional ties.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 25.00',
      priceNote: 'per document (customization and review).',
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: 'Documentos Complementarios',
      intro:
        'Emitimos y preparamos documentos de apoyo que fortalecen tu solicitud de visa o proceso migratorio.',
      examplesTitle: '📋 Ejemplos de documentos:',
      items: [
        'Formulario <strong>I-134 (Affidavit of Support)</strong>;',
        'Cartas explicativas, declaraciones y justificaciones personalizadas;',
        'Comprobantes financieros y de vínculo familiar o profesional.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 25.00',
      priceNote: 'por documento (con personalización y revisión).',
      waPrefix: '¡Hola! Me interesa el servicio: ',
    },
  }[lng];

  // Preferir chaves globais quando existirem
  const title = t('services.visas.list.Complementares.title', { defaultValue: S.title });
  const intro = t('services.visas.pages.Complementares.intro', { defaultValue: S.intro });
  const examplesTitle = t('services.visas.examples_title_docs', { defaultValue: S.examplesTitle });
  const priceLabel = t('services.visas.pages.Complementares.price_label', { defaultValue: S.priceLabel });
  const price = t('services.visas.pages.Complementares.price', { defaultValue: S.price });
  const priceNote = t('services.visas.pages.Complementares.price_note', { defaultValue: S.priceNote });

  const items = [0, 1, 2].map((i) =>
    t(`services.visas.pages.Complementares.items.${i}`, { defaultValue: S.items[i] })
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
          <span className="text-2xl text-green-800">{price}</span>{' '}
          <span className="text-gray-700">{priceNote}</span>
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
