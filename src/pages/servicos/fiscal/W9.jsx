// 📄 src/pages/servicos/fiscal/W9.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function W9() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se as chaves do i18n não existirem)
  const S = {
    pt: {
      title: 'Preenchimento do Formulário W-9',
      intro:
        'Precisa enviar seu <strong>Formulário W-9</strong> para uma empresa americana e quer evitar erros? A HelpUS cuida de tudo de forma rápida, segura e com suporte especializado.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Preenchimento automático com dados da sua <strong>LLC</strong> e <strong>EIN</strong>;',
        'PDF final assinado digitalmente ou pronto para assinatura manual;',
        'Instruções claras de como enviar para a empresa contratante;',
        'Suporte para dúvidas e modificações futuras.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'US$ 25.00',
      ctaFallback: 'Falar com a HelpUS',
      waText: 'Olá! Preciso de ajuda com o formulário W-9.',
    },
    en: {
      title: 'Form W-9 Completion',
      intro:
        'Need to send your <strong>Form W-9</strong> to a U.S. company and want to avoid mistakes? HelpUS prepares it quickly and securely, with expert support.',
      includesTitle: '📋 What’s included:',
      items: [
        'Auto-fill with your <strong>LLC</strong> details and <strong>EIN</strong>;',
        'Final PDF digitally signed or ready for manual signature;',
        'Clear instructions on how to submit to the requester;',
        'Ongoing support for questions and future changes.',
      ],
      priceLabel: '💵 Price:',
      price: 'US$ 25.00',
      ctaFallback: 'Chat with HelpUS',
      waText: "Hello! I need help with Form W-9.",
    },
    es: {
      title: 'Relleno del Formulario W-9',
      intro:
        '¿Necesitas enviar tu <strong>Formulario W-9</strong> a una empresa en EE. UU. y quieres evitar errores? HelpUS lo prepara de forma rápida y segura, con soporte especializado.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Relleno automático con datos de tu <strong>LLC</strong> y <strong>EIN</strong>;',
        'PDF final firmado digitalmente o listo para firma manual;',
        'Instrucciones claras para enviarlo al solicitante;',
        'Soporte para dudas y futuras modificaciones.',
      ],
      priceLabel: '💵 Precio:',
      price: 'US$ 25.00',
      ctaFallback: 'Hablar con HelpUS',
      waText: '¡Hola! Necesito ayuda con el Formulario W-9.',
    },
  }[lng];

  // Preferir chaves globais e de página do i18n quando existirem
  const title = t('services.tax.W9.title', { defaultValue: S.title });
  const intro = t('services.tax.W9Page.intro', { defaultValue: S.intro });
  const includesTitle = t('services.tax.W9Page.includes_title', { defaultValue: S.includesTitle });

  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.W9Page.items.${i}`, { defaultValue: S.items[i] })
  );

  const priceLabel = t('services.tax.W9Page.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.W9Page.price', { defaultValue: S.price });

  const cta = t('services.company.AberturaLLC.cta', { defaultValue: S.ctaFallback });
  const waText = t('services.tax.W9Page.whatsapp_msg', { defaultValue: S.waText });
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
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
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
