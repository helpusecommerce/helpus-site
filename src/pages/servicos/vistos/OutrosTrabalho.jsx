// 📄 src/pages/servicos/vistos/OutrosTrabalho.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function OutrosTrabalho() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';
  const title = t('services.visas.pages.OutrosTrabalho.title', { defaultValue: 'Outros Vistos de Trabalho (H1B, L1, O1, etc.)' });
  const onRequest = { pt: 'Sob consulta', en: 'On request', es: 'A consultar' }[lng];
  const msgPrefix = { pt: 'Olá! Tenho interesse no serviço: ', en: "Hello! I'm interested in the service: ", es: '¡Hola! Me interesa el servicio: ' }[lng];
  const waMsg = encodeURIComponent(`${msgPrefix}${title}`);
  const items = [
    t('services.visas.pages.OutrosTrabalho.items.0', { defaultValue: 'Orientações sobre <strong>H1B</strong> (trabalho qualificado com sponsor nos EUA)' }),
    t('services.visas.pages.OutrosTrabalho.items.1', { defaultValue: 'Apoio no processo de <strong>L1</strong> (transferência entre empresas)' }),
    t('services.visas.pages.OutrosTrabalho.items.2', { defaultValue: 'Consultoria em <strong>O1</strong> (habilidade extraordinária)' }),
    t('services.visas.pages.OutrosTrabalho.items.3', { defaultValue: 'Análise de sponsor, elegibilidade e documentação exigida' }),
    t('services.visas.pages.OutrosTrabalho.items.4', { defaultValue: 'Preparação da petição inicial com checklist personalizado' }),
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{title}</h1>

        <p className="text-lg text-gray-700 mb-4">
          {t('services.visas.pages.OutrosTrabalho.intro', {
            defaultValue:
              'Oferecemos consultoria personalizada para auxiliar na escolha e preparação de vistos de trabalho específicos, de acordo com seu perfil.',
          })}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          {t('services.visas.includes_title', { defaultValue: '📋 O que está incluído:' })}
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          {t('services.visas.pages.OutrosTrabalho.price_label', { defaultValue: '💵 Valor do serviço HelpUS:' })}{' '}
          <span className="text-2xl text-green-800">{t('services.visas.pages.OutrosTrabalho.price', { defaultValue: onRequest })}</span>
        </div>

        <a
          href={`https://wa.me/5583998721848?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          {t('services.company.AberturaLLC.cta', { defaultValue: 'Contratar agora via WhatsApp' })}
        </a>
      </div>
    </section>
  );
}
