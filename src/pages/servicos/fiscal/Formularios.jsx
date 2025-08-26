// 📄 src/pages/servicos/fiscal/Formularios.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Formularios() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se as chaves do i18n não existirem)
  const S = {
    pt: {
      title: 'Formulários Fiscais e Anexos Específicos',
      intro:
        'Caso você precise de <strong>formulários fiscais adicionais</strong> ou documentos específicos para comprovação de renda, dependência ou investimentos, nós preparamos tudo de forma completa e personalizada:',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Formulários auxiliares (<strong>W-2, 1099, 8962, 8862</strong>, entre outros);',
        'Montagem de anexos específicos para créditos e deduções;',
        'Correções e retificações de formulários já enviados;',
        'Suporte sob demanda para casos especiais.',
      ],
      priceLabel: '💵 Valor:',
      price: 'Sob consulta',
      ctaFallback: 'Solicitar agora via WhatsApp',
      waText: 'Olá! Tenho interesse no serviço: Formulários Fiscais e Anexos Específicos.',
    },
    en: {
      title: 'Tax Forms and Specific Schedules',
      intro:
        'If you need <strong>additional tax forms</strong> or specific documents to substantiate income, dependents, or investments, we prepare everything thoroughly and tailored to your case:',
      includesTitle: '📋 What’s included:',
      items: [
        'Auxiliary forms (<strong>W-2, 1099, 8962, 8862</strong>, and others);',
        'Preparation of specific schedules for credits and deductions;',
        'Corrections and amended returns of already filed forms;',
        'On-demand support for special cases.',
      ],
      priceLabel: '💵 Price:',
      price: 'On request',
      ctaFallback: 'Request via WhatsApp',
      waText: "Hello! I'm interested in the Tax Forms and Specific Schedules service.",
    },
    es: {
      title: 'Formularios Fiscales y Anexos Específicos',
      intro:
        'Si necesitas <strong>formularios fiscales adicionales</strong> o documentos específicos para acreditar ingresos, dependientes o inversiones, preparamos todo de forma completa y personalizada:',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Formularios auxiliares (<strong>W-2, 1099, 8962, 8862</strong>, entre otros);',
        'Montaje de anexos específicos para créditos y deducciones;',
        'Correcciones y declaraciones enmendadas de formularios ya enviados;',
        'Soporte bajo demanda para casos especiales.',
      ],
      priceLabel: '💵 Precio:',
      price: 'A consultar',
      ctaFallback: 'Solicitar por WhatsApp',
      waText: '¡Hola! Me interesa el servicio: Formularios Fiscales y Anexos Específicos.',
    },
  }[lng];

  // Preferir chaves globais do i18n (conforme src/i18n.js)
  const title = t('services.tax.Formularios.title', { defaultValue: S.title });
  const intro = t('services.tax.Formularios.desc', { defaultValue: S.intro });

  // Chaves específicas desta página
  const includesTitle = t('services.tax.FormulariosPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.FormulariosPage.items.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.FormulariosPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.FormulariosPage.price', { defaultValue: S.price });

  // CTA & WhatsApp
  const cta = t('services.company.AberturaLLC.cta', { defaultValue: S.ctaFallback });
  const waText = t('services.tax.FormulariosPage.whatsapp_msg', { defaultValue: S.waText });
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
