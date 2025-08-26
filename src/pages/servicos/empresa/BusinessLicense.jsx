// 📄 src/pages/servicos/empresa/BusinessLicense.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BusinessLicense = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {t('bl.title', 'Obtenção da Licença Comercial nos EUA (Business License)')}
        </motion.h1>

        <motion.p
          className="mb-6 text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {t(
            'bl.intro',
            'A HelpUS oferece suporte completo para você obter sua licença comercial em qualquer estado dos Estados Unidos, de forma rápida e personalizada conforme as exigências locais.'
          )}
        </motion.p>

        <motion.h2
          className="text-xl font-semibold mt-4 mb-3 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {t('bl.includes_title', '📋 O que está incluído:')}
        </motion.h2>

        <motion.ul
          className="list-disc list-inside mb-6 text-gray-700 space-y-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <li>{t('bl.includes.0', 'Preenchimento do formulário oficial do estado ou condado de atuação;')}</li>
          <li>{t('bl.includes.1', 'Pesquisa do código de licença adequado à sua atividade (ex: 84 – Contractor);')}</li>
          <li>{t('bl.includes.2', 'PDF final preenchido e pronto para envio ou protocolo;')}</li>
          <li>{t('bl.includes.3', 'Instruções claras sobre taxas e forma correta de envio/envio online;')}</li>
          <li>{t('bl.includes.4', 'Suporte via WhatsApp ou e-mail até a emissão da licença.')}</li>
        </motion.ul>

        <motion.div
          className="text-lg font-semibold text-green-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {t('bl.price_label', '💵 Valor do serviço HelpUS:')}{' '}
          <span className="text-2xl text-green-800">{t('bl.price', '$49')}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={t(
              'bl.whatsapp_href',
              'https://wa.me/5583998721848?text=Olá,%20desejo%20ajuda%20para%20obter%20minha%20Business%20License%20nos%20EUA.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            <FaWhatsapp className="text-xl" />
            {t('bl.cta', 'Falar com a HelpUS')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessLicense;
