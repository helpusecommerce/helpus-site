// 📄 src/pages/servicos/fiscal/ScheduleC.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ScheduleC() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados se as chaves do i18n não existirem)
  const S = {
    pt: {
      title: 'Schedule C + SE para Autônomos',
      intro:
        'Se você atua como autônomo, freelancer ou prestador de serviços, preparamos o <strong>Schedule C</strong> e o <strong>Schedule SE</strong> para calcular corretamente seus impostos, garantindo conformidade com o IRS e aproveitamento máximo de deduções.',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Relatório detalhado de receitas e despesas;',
        'Cálculo do lucro líquido e <strong>Self-Employment Tax</strong> (imposto de autônomo);',
        'Inclusão no formulário 1040 com os anexos obrigatórios;',
        'Suporte com deduções, depreciações e comprovações.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'US$ 29.00',
      ctaFallback: 'Contratar agora via WhatsApp',
      waText: 'Olá! Tenho interesse no serviço: Schedule C + SE para Autônomos.',
    },
    en: {
      title: 'Schedule C + SE for Self-Employed',
      intro:
        'If you are self-employed or a freelancer, we prepare <strong>Schedule C</strong> and <strong>Schedule SE</strong> to calculate taxes correctly, ensure IRS compliance, and maximize deductions.',
      includesTitle: '📋 What’s included:',
      items: [
        'Detailed report of income and expenses;',
        'Net profit and <strong>Self-Employment Tax</strong> calculation;',
        'Filing within Form 1040 with required schedules;',
        'Support with deductions, depreciation and substantiation.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 29.00',
      ctaFallback: 'Hire via WhatsApp',
      waText: "Hello! I'm interested in the Schedule C + SE service.",
    },
    es: {
      title: 'Schedule C + SE para Autónomos',
      intro:
        'Si trabajas como autónomo o freelance, preparamos el <strong>Schedule C</strong> y el <strong>Schedule SE</strong> para calcular correctamente tus impuestos, cumpliendo con el IRS y maximizando deducciones.',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Informe detallado de ingresos y gastos;',
        'Cálculo del beneficio neto y <strong>Self-Employment Tax</strong>;',
        'Inclusión en el Formulario 1040 con anexos requeridos;',
        'Soporte con deducciones, depreciaciones y comprobantes.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 29.00',
      ctaFallback: 'Contratar por WhatsApp',
      waText: '¡Hola! Me interesa el servicio: Schedule C + SE para Autónomos.',
    },
  }[lng];

  // Título e descrição principais (usando chaves globais quando existirem)
  const title = t('services.tax.ScheduleC.title', { defaultValue: S.title });
  const intro = t('services.tax.ScheduleC.desc', { defaultValue: S.intro });

  // Chaves específicas desta página
  const includesTitle = t('services.tax.ScheduleCPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.ScheduleCPage.items.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.ScheduleCPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.ScheduleCPage.price', { defaultValue: S.price });

  // CTA & WhatsApp
  const cta = t('services.company.AberturaLLC.cta', { defaultValue: S.ctaFallback });
  const waText = t('services.tax.ScheduleCPage.whatsapp_msg', { defaultValue: S.waText });
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
