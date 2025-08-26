// 📄 src/pages/servicos/fiscal/IRPF.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function IRPF() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (usados caso alguma chave não exista no i18n)
  const S = {
    pt: {
      title: 'Declaração de Imposto de Renda (Pessoa Física)',
      intro:
        'Realizamos o preenchimento completo da sua <strong>declaração 1040</strong> (equivalente ao IRPF), garantindo o máximo de deduções legais e conformidade total com o IRS:',
      includesTitle: '📋 O que está incluído:',
      items: [
        'Preenchimento do formulário <strong>1040</strong> e anexos obrigatórios;',
        'Análise detalhada de deduções com base nas despesas do ano;',
        'Inclusão de dependentes, créditos fiscais e renda estrangeira;',
        'Envio seguro e suporte após a entrega.',
      ],
      priceLabel: '💵 Valor do serviço:',
      price: 'US$ 39.00',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
      ctaFallback: 'Contratar agora via WhatsApp',
    },
    en: {
      title: 'Individual Tax Return (Form 1040)',
      intro:
        'We prepare your <strong>Form 1040</strong> end-to-end, maximizing legal deductions and ensuring full IRS compliance:',
      includesTitle: '📋 What’s included:',
      items: [
        'Preparation of <strong>Form 1040</strong> plus required schedules;',
        'Detailed deduction review based on your yearly expenses;',
        'Dependents, tax credits, and foreign income handling;',
        'Secure filing and post-submission support.',
      ],
      priceLabel: '💵 Service fee:',
      price: 'US$ 39.00',
      waPrefix: "Hello! I'm interested in the service: ",
      ctaFallback: 'Hire via WhatsApp',
    },
    es: {
      title: 'Declaración de Impuestos (Formulario 1040)',
      intro:
        'Realizamos tu <strong>Formulario 1040</strong> de principio a fin, maximizando deducciones legales y cumpliendo con el IRS:',
      includesTitle: '📋 Qué incluye:',
      items: [
        'Llenado del <strong>Formulario 1040</strong> y anexos requeridos;',
        'Revisión detallada de deducciones según tus gastos del año;',
        'Inclusión de dependientes, créditos fiscales e ingresos del exterior;',
        'Envío seguro y soporte posterior.',
      ],
      priceLabel: '💵 Honorarios del servicio:',
      price: 'US$ 39.00',
      waPrefix: '¡Hola! Me interesa el servicio: ',
      ctaFallback: 'Contratar por WhatsApp',
    },
  }[lng];

  // Preferir chaves existentes do i18n (conforme src/i18n.js)
  const title = t('services.tax.IRPF.title', { defaultValue: S.title });
  const intro = t('services.tax.IRPF.desc', { defaultValue: S.intro });

  // Chaves específicas desta página (com fallbacks)
  const includesTitle = t('services.tax.IRPFPage.includes_title', { defaultValue: S.includesTitle });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.tax.IRPFPage.items.${i}`, { defaultValue: S.items[i] })
  );
  const priceLabel = t('services.tax.IRPFPage.price_label', { defaultValue: S.priceLabel });
  const price = t('services.tax.IRPFPage.price', { defaultValue: S.price });

  // CTA & WhatsApp
  const cta = t('services.company.AberturaLLC.cta', { defaultValue: S.ctaFallback });
  const waMsg = encodeURIComponent(`${S.waPrefix}${title}`);

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

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          {includesTitle}
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {items.map((it, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          {priceLabel}{' '}
          <span className="text-2xl text-green-800">{price}</span>
        </div>

        <a
          href={`https://wa.me/5583998721848?text=${waMsg}`}
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
