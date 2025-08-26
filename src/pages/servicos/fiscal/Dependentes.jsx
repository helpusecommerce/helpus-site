// 📄 src/pages/servicos/fiscal/Dependentes.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Dependentes() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se as chaves do i18n não existirem)
  const S = {
    pt: {
      title: 'Declaração com Dependentes (Child Tax Credit)',
      intro:
        'Se você possui filhos que atendem aos requisitos legais, pode receber até <strong>US$ 2.000 por dependente qualificado</strong> na sua declaração.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Verificação de elegibilidade para o crédito;',
        'Inclusão correta do dependente no <strong>Form 1040</strong>;',
        'Otimização do reembolso com base nos créditos fiscais;',
        'Suporte completo para comprovação, se exigido.',
      ],
      priceLabel: '💵 Valor:',
      price: 'US$ 19.00',
      ctaFallback: 'Contratar agora via WhatsApp',
      waText: 'Olá! Tenho interesse no serviço: Declaração com Dependentes (Child Tax Credit).',
    },
    en: {
      title: 'Return with Dependents (Child Tax Credit)',
      intro:
        'If your children meet eligibility rules, you may claim up to <strong>$2,000 per qualifying child</strong> on your return.',
      includesTitle: '📋 What’s included:',
      items: [
        'Eligibility check for the credit;',
        'Correct dependent entry on <strong>Form 1040</strong>;',
        'Refund optimization using applicable credits;',
        'Full support with documentation if required.',
      ],
      priceLabel: '💵 Price:',
      price: 'US$ 19.00',
      ctaFallback: 'Hire via WhatsApp',
      waText: "Hello! I'm interested in the Return with Dependents (Child Tax Credit) service.",
    },
    es: {
      title: 'Declaración con Dependientes (Child Tax Credit)',
      intro:
        'Si tus hijos cumplen los requisitos, puedes recibir hasta <strong>US$ 2.000 por hijo calificado</strong> en tu declaración.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Verificación de elegibilidad para el crédito;',
        'Inclusión correcta del dependiente en el <strong>Formulario 1040</strong>;',
        'Optimización del reembolso según los créditos fiscales;',
        'Soporte completo con comprobación si es requerido.',
      ],
      priceLabel: '💵 Precio:',
      price: 'US$ 19.00',
      ctaFallback: 'Contratar por WhatsApp',
      waText: '¡Hola! Me interesa el servicio: Declaración con Dependientes (Child Tax Credit).',
    },
  }[lng];

  // Título e descrição principais (i18n globais se existirem)
  const title = t('services.tax.Dependentes.title', { defaultValue: S.title });
  const intro = t('services.tax.Dependentes.desc', { defaultValue: S.intro });

  // Chaves específicas desta página (com fallbacks)
  const includesTitle = t('services.tax.DependentesPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.DependentesPage.items.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.DependentesPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.DependentesPage.price', { defaultValue: S.price });

  // CTA & WhatsApp
  const cta = t('services.company.AberturaLLC.cta', { defaultValue: S.ctaFallback });
  const waText = t('services.tax.DependentesPage.whatsapp_msg', { defaultValue: S.waText });
  const waHref = `https://wa.me/5583998721848?text=${encodeURIComponent(waText)}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="text-lg text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: intro }}
        />

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{includesTitle}</h2>
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
