// src/pages/servicos/Vistos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Vistos() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // textos que não estão no JSON (fallbacks por idioma)
  const onRequest = { pt: 'Sob consulta', en: 'On request', es: 'A consultar' }[lng] || 'On request';
  const trustAlt = { pt: 'Selo de confiança', en: 'Trust badge', es: 'Sello de confianza' }[lng] || 'Trust badge';
  const trustLine = {
    pt: 'Atendimento seguro, discreto e aprovado por clientes reais.',
    en: 'Secure, discreet service — approved by real clients.',
    es: 'Atención segura y discreta, aprobada por clientes reales.',
  }[lng] || '';

  // label do botão (reaproveitando string existente)
  const whatsappCta = t('services.company.AberturaLLC.cta'); // pt: "Contratar agora via WhatsApp"
  const msgPrefix = {
    pt: 'Olá! Tenho interesse no serviço: ',
    en: "Hello! I'm interested in the service: ",
    es: '¡Hola! Me interesa el servicio: ',
  }[lng] || 'Hello! I am interested in the service: ';

  // itens usando chaves do i18n (titles + desc)
  const itens = [
    { key: 'B1B2', price: 'US$ 29.00', route: '/servicos/vistos/B1B2' },
    { key: 'F1', price: 'US$ 39.00', route: '/servicos/vistos/F1' },
    { key: 'F2', price: 'US$ 39.00', route: '/servicos/vistos/F2' },
    { key: 'EB1A', price: 'US$ 89.00', route: '/servicos/vistos/EB1A' },
    { key: 'EB2NIW', price: 'US$ 89.00', route: '/servicos/vistos/EB2NIW' },
    { key: 'Renovacao', price: 'US$ 23.00', route: '/servicos/vistos/Renovacao' },
    { key: 'Familia', price: 'US$ 29.00', route: '/servicos/vistos/Familia' },
    { key: 'CasosEspeciais', price: onRequest, route: '/servicos/vistos/casos-especiais' },
    { key: 'Complementares', price: onRequest, route: '/servicos/vistos/Complementares' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {t('home.cards.visas.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {itens.map((item) => {
            const title = t(`services.visas.list.${item.key}.title`);
            const desc = t(`services.visas.list.${item.key}.desc`);
            const waMsg = encodeURIComponent(`${msgPrefix}${title}`);

            return (
              <div
                key={item.key}
                className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
                data-aos="fade-up"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    <Link to={item.route} className="hover:underline">{title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{desc}</p>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <a
                    href={`https://wa.me/5583998721848?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    {whatsappCta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <img src="/selo-confiança.png" alt={trustAlt} className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">{trustLine}</p>
        </div>
      </div>
    </section>
  );
}
