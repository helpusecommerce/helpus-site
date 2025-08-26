// 📄 src/pages/AberturaLLC.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

export default function AberturaLLC() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('llc.title', 'Abertura de Empresa (LLC) + Obtenção de EIN')}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t(
            'llc.intro',
            'Cuidamos de todo o processo de abertura da sua LLC nos Estados Unidos, com emissão do EIN (Número de Identificação Federal):'
          )}
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-gray-600 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>{t('llc.steps.name', 'Consulta de nome disponível e registro oficial')}</li>
          <li>{t('llc.steps.forms', 'Preenchimento de formulários de abertura junto ao estado')}</li>
          <li>{t('llc.steps.ein', 'Geração do EIN diretamente com o IRS')}</li>
          <li>{t('llc.steps.delivery', 'Entrega dos documentos digitais prontos para uso')}</li>
        </motion.ul>

        <motion.p
          className="text-lg text-green-700 mt-6 font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t('llc.price', 'Valor: US$ 79,00')}
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Abertura de Empresa LLC + EIN nos EUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition shadow-md"
          >
            <FaWhatsapp className="text-xl" />
            {t('llc.cta', 'Contratar agora via WhatsApp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
