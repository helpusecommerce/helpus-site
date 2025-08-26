// 📄 src/pages/servicos/empresa/AberturaLLC.jsx  (ajuste o caminho se necessário)
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

export default function AberturaLLC() {
  const { t } = useTranslation();

  const whatsappNumber = "5583998721848";
  const msg = t(
    "services.company.AberturaLLC.whatsapp_msg",
    "Olá! Tenho interesse no serviço: Abertura de Empresa LLC + EIN nos EUA"
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("services.company.AberturaLLC.title")}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("services.company.AberturaLLC.intro")}
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-gray-600 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>{t("services.company.AberturaLLC.steps.name")}</li>
          <li>{t("services.company.AberturaLLC.steps.forms")}</li>
          <li>{t("services.company.AberturaLLC.steps.ein")}</li>
          <li>{t("services.company.AberturaLLC.steps.delivery")}</li>
        </motion.ul>

        <motion.p
          className="text-lg text-green-700 mt-6 font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t("services.company.AberturaLLC.price")}
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition shadow-md"
          >
            <FaWhatsapp className="text-xl" />
            {t("services.company.AberturaLLC.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
