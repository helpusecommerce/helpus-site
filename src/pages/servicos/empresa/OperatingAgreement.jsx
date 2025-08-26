// 📄 src/pages/servicos/empresa/OperatingAgreement.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function OperatingAgreement() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks curtos por idioma
  const S = {
    pt: { priceLabel: '💵 Valor do serviço HelpUS:' },
    en: { priceLabel: '💵 Service fee:' },
    es: { priceLabel: '💵 Honorarios del servicio:' },
  }[lng];

  const title = t('services.company.OperatingAgreement.title', {
    defaultValue: 'Operating Agreement Personalizado',
  });

  const intro = t('services.company.OperatingAgreement.intro', {
    defaultValue:
      'Elaboramos um Operating Agreement (Contrato de Operação) personalizado para sua LLC — indispensável para abrir conta bancária, obter licenças e manter sua empresa regular nos Estados Unidos.',
  });

  const includesTitle = t('services.company.OperatingAgreement.includes_title', {
    defaultValue: '📋 O que está incluído:',
  });

  const items = [0, 1, 2, 3].map((i) =>
    t(`services.company.OperatingAgreement.includes.${i}`, {
      defaultValue: [
        'Contrato jurídico adaptado à sua realidade empresarial',
        'Cláusulas sobre sócios, divisão de lucros e responsabilidades',
        'Versão em inglês para uso oficial + tradução explicativa em português',
        'Envio digital em PDF pronto para utilização imediata',
      ][i],
    })
  );

  const price = t('services.company.OperatingAgreement.price', { defaultValue: '$25' });
  const cta = t('services.company.OperatingAgreement.cta', { defaultValue: 'Solicitar via WhatsApp' });
  const waText = t('services.company.OperatingAgreement.whatsapp_msg', {
    defaultValue: 'Olá! Tenho interesse no serviço de Operating Agreement Personalizado.',
  });
  const waHref = `https://wa.me/5583998721848?text=${encodeURIComponent(waText)}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          {title}
        </h1>

        <p className="text-lg text-gray-700 mb-4">{intro}</p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">{includesTitle}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          {S.priceLabel} <span className="text-2xl text-green-800">{price}</span>
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
