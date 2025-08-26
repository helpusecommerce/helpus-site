// 📄 src/pages/servicos/empresa/EnderecoFiscal.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function EnderecoFiscal() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks curtos por idioma (apenas para rótulos auxiliares)
  const S = {
    pt: { priceLabel: '💵 Valor do serviço HelpUS:', ctaFallback: 'Falar com a HelpUS' },
    en: { priceLabel: '💵 Service fee:', ctaFallback: 'Chat with HelpUS' },
    es: { priceLabel: '💵 Honorarios del servicio:', ctaFallback: 'Hablar con HelpUS' },
  }[lng];

  const title = t('services.company.EnderecoFiscal.title', { defaultValue: 'Endereço Fiscal nos EUA' });
  const intro = t('services.company.EnderecoFiscal.intro', {
    defaultValue:
      'Oferecemos endereço fiscal válido para registrar sua empresa nos Estados Unidos, essencial para abertura de conta bancária, recebimento de correspondência oficial e registro da LLC:',
  });

  const includesTitle = t('services.company.EnderecoFiscal.includes_title', { defaultValue: '📋 O que está incluído:' });
  const items = [0, 1, 2, 3].map((i) =>
    t(`services.company.EnderecoFiscal.includes.${i}`, {
      defaultValue: [
        'Endereço válido com número, cidade e estado',
        'Inclusão do nome da empresa na caixa postal',
        'Encaminhamento digital dos documentos recebidos',
        'Contrato de cessão emitido em PDF',
      ][i],
    })
  );

  const price = t('services.company.EnderecoFiscal.price', { defaultValue: '$29' });
  const cta = t('services.company.EnderecoFiscal.cta', { defaultValue: S.ctaFallback });
  const waText = t('services.company.EnderecoFiscal.whatsapp_msg', {
    defaultValue: 'Olá! Tenho interesse no serviço de Endereço Fiscal nos EUA.',
  });
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
