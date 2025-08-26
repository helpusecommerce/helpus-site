// 📄 src/pages/servicos/fiscal/ITIN.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ITIN() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (serão usados caso alguma chave não exista no i18n)
  const S = {
    pt: {
      title: 'Solicitação de ITIN (Número de Identificação Fiscal para Estrangeiros)',
      intro:
        'O <strong>ITIN (Individual Taxpayer Identification Number)</strong> é essencial para estrangeiros que precisam declarar impostos nos EUA, mas não possuem direito a um SSN (Social Security Number).',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Preenchimento completo do formulário oficial <strong>W-7</strong>;',
        'Elaboração de <strong>carta explicativa</strong> personalizada para o IRS;',
        'Checklist atualizado dos documentos aceitos (passaporte, certidões, etc.);',
        'Instruções detalhadas para envio por correio ou validação via <strong>ACE</strong>;',
      ],
      priceLabel: '💵 Valor do serviço HelpUS:',
      price: '$55',
      cta: 'Falar com a HelpUS',
      waText: 'Olá! Tenho interesse no serviço de Solicitação de ITIN.',
    },
    en: {
      title: 'ITIN Application (Individual Taxpayer Identification Number)',
      intro:
        'The <strong>ITIN (Individual Taxpayer Identification Number)</strong> is essential for foreigners who must file U.S. taxes but are not eligible for an SSN (Social Security Number).',
      includesTitle: '📋 What’s included:',
      items: [
        'Complete filling of the official <strong>W-7</strong> form;',
        'Personalized <strong>cover letter</strong> for the IRS;',
        'Updated checklist of acceptable documents (passport, certificates, etc.);',
        'Detailed instructions to mail or validate via <strong>ACE</strong>;',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 55',
      cta: 'Chat with HelpUS',
      waText: "Hello! I'm interested in the ITIN Application service.",
    },
    es: {
      title: 'Solicitud de ITIN (Número de Identificación del Contribuyente)',
      intro:
        'El <strong>ITIN (Individual Taxpayer Identification Number)</strong> es esencial para extranjeros que deben declarar impuestos en EE. UU. y no tienen derecho a un SSN (Social Security Number).',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Relleno completo del formulario oficial <strong>W-7</strong>;',
        '<strong>Carta explicativa</strong> personalizada para el IRS;',
        'Checklist actualizado de documentos aceptados (pasaporte, actas, etc.);',
        'Instrucciones detalladas para envío por correo o validación vía <strong>ACE</strong>;',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 55',
      cta: 'Hablar con HelpUS',
      waText: '¡Hola! Me interesa el servicio de Solicitud de ITIN.',
    },
  }[lng];

  // Preferir as chaves globais do i18n quando existirem
  const title = t('services.tax.ITINPage.title', { defaultValue: S.title });
  const intro = t('services.tax.ITINPage.intro', { defaultValue: S.intro });
  const includesTitle = t('services.tax.ITINPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.ITINPage.includes.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.ITINPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.ITINPage.price', { defaultValue: S.price });
  const cta = t('services.tax.ITINPage.cta', { defaultValue: S.cta });
  const waText = t('services.tax.ITINPage.whatsapp_msg', { defaultValue: S.waText });
  const waHref = `https://wa.me/5583998721848?text=${encodeURIComponent(waText)}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="text-lg text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: intro }}
        />

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          {includesTitle}
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {items.map((it, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          {priceLabel} <span className="text-2xl text-green-800">{price}</span>
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
