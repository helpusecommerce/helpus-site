// 📄 src/pages/servicos/fiscal/W7.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function W7() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se alguma chave do i18n não existir)
  const S = {
    pt: {
      title: 'Formulário W-7 (Solicitação de ITIN)',
      intro:
        'O Formulário W-7 é o documento oficial utilizado para solicitar o ITIN (Individual Taxpayer Identification Number) junto ao IRS. Cuidamos de todo o preenchimento com precisão e segurança:',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Definição correta da categoria de elegibilidade;',
        'Preenchimento completo e consistente dos dados;',
        'Revisão para evitar erros comuns e garantir aceitação;',
        'Inclusão de carta explicativa e checklist de documentos;',
      ],
      priceLabel: '💵 Valor:',
      price: 'Incluído no pacote de ITIN',
      cta: 'Solicitar via WhatsApp',
      waText: 'Olá! Preciso de ajuda para preencher o Formulário W-7 (ITIN).',
    },
    en: {
      title: 'Form W-7 (ITIN Request)',
      intro:
        'Form W-7 is the official document used to request an ITIN (Individual Taxpayer Identification Number) from the IRS. We handle the entire process with accuracy and care:',
      includesTitle: '📋 What’s included:',
      items: [
        'Correct definition of the eligibility category;',
        'Complete and consistent data entry;',
        'Review to avoid common errors and ensure acceptance;',
        'Cover letter and document checklist included;',
      ],
      priceLabel: '💵 Price:',
      price: 'Included in the ITIN package',
      cta: 'Request via WhatsApp',
      waText: "Hello! I need help filling Form W-7 (ITIN).",
    },
    es: {
      title: 'Formulario W-7 (Solicitud de ITIN)',
      intro:
        'El Formulario W-7 es el documento oficial para solicitar el ITIN (Individual Taxpayer Identification Number) ante el IRS. Nos encargamos de todo el proceso con precisión y seguridad:',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Definición correcta de la categoría de elegibilidad;',
        'Relleno completo y consistente de los datos;',
        'Revisión para evitar errores comunes y asegurar aceptación;',
        'Carta explicativa y checklist de documentos incluidos;',
      ],
      priceLabel: '💵 Precio:',
      price: 'Incluido en el paquete de ITIN',
      cta: 'Solicitar por WhatsApp',
      waText: 'Hola, necesito ayuda para completar el Formulario W-7 (ITIN).',
    },
  }[lng];

  // Preferir as chaves globais quando existirem (definidas no i18n.js)
  const title = t('services.tax.W7Page.title', { defaultValue: S.title });
  const intro = t('services.tax.W7Page.intro', { defaultValue: S.intro });
  const includesTitle = t('services.tax.W7Page.includes_title', { defaultValue: S.includesTitle });

  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.W7Page.includes.${i}`, { defaultValue: S.items[i] })
  );

  const priceLabel = t('services.tax.W7Page.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.W7Page.price', { defaultValue: S.price });

  const cta = t('services.tax.W7Page.cta', { defaultValue: S.cta });
  const waText = t('services.tax.W7Page.whatsapp_msg', { defaultValue: S.waText });
  const waHref = `https://wa.me/5583998721848?text=${encodeURIComponent(waText)}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          {title}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          {intro}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{includesTitle}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {items.map((it, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          {priceLabel} <span className="text-green-800">{price}</span>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          {cta}
        </a>
      </div>
    </section>
  );
}
