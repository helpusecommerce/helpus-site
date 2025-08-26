// 📄 src/pages/servicos/fiscal/Envio.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Envio() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se alguma chave do i18n não existir)
  const S = {
    pt: {
      title: 'Envio de Documentos Fiscais e Suporte',
      intro:
        'Após a preparação da sua declaração ou formulário, fornecemos <strong>orientações completas</strong> sobre o envio correto e garantimos suporte contínuo até a confirmação do IRS.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Instruções detalhadas para envio por correio (IRS, ITIN e outros);',
        'Checklist com os documentos necessários;',
        'Etiqueta de envio personalizada e instruções em português;',
        'Suporte para acompanhar o recebimento e resposta do IRS.',
      ],
      priceLabel: '💵 Valor:',
      price: 'Incluso nos serviços principais',
      cta: 'Entrar em contato pelo WhatsApp',
      waText: 'Olá! Tenho interesse no serviço: Envio de Documentos Fiscais e Suporte.',
    },
    en: {
      title: 'Tax Document Submission & Support',
      intro:
        'After your return or form is prepared, we provide <strong>complete instructions</strong> for proper mailing and offer ongoing support until IRS confirmation.',
      includesTitle: '📋 What’s included:',
      items: [
        'Detailed mailing instructions (IRS, ITIN and others);',
        'Checklist of required documents;',
        'Custom shipping label and step-by-step guidance;',
        'Support to track delivery and IRS response.',
      ],
      priceLabel: '💵 Price:',
      price: 'Included in main services',
      cta: 'Contact via WhatsApp',
      waText: "Hello! I'm interested in the Tax Document Submission & Support service.",
    },
    es: {
      title: 'Envío de Documentos Fiscales y Soporte',
      intro:
        'Tras preparar tu declaración o formulario, brindamos <strong>instrucciones completas</strong> para el envío correcto y soporte continuo hasta la confirmación del IRS.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Instrucciones detalladas para envío por correo (IRS, ITIN y otros);',
        'Checklist con los documentos necesarios;',
        'Etiqueta de envío personalizada e instrucciones en español;',
        'Soporte para seguimiento de recepción y respuesta del IRS.',
      ],
      priceLabel: '💵 Precio:',
      price: 'Incluido en los servicios principales',
      cta: 'Contactar por WhatsApp',
      waText: '¡Hola! Me interesa el servicio: Envío de Documentos Fiscales y Soporte.',
    },
  }[lng];

  // Preferir chaves existentes no i18n global (ver src/i18n.js)
  const title = t('services.tax.Envio.title', { defaultValue: S.title });
  const intro = t('services.tax.Envio.desc', { defaultValue: S.intro });

  // Chaves específicas desta página
  const includesTitle = t('services.tax.EnvioPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.EnvioPage.items.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.EnvioPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.EnvioPage.price', { defaultValue: S.price });
  const cta = t('services.tax.EnvioPage.cta', { defaultValue: S.cta });
  const waText = t('services.tax.EnvioPage.whatsapp_msg', { defaultValue: S.waText });
  const waHref = `https://wa.me/5583998721848?text=${encodeURIComponent(waText)}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          {title}
        </h1>

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
