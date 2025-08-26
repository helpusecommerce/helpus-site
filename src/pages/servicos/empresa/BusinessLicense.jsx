import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BusinessLicense() {
  const { t } = useTranslation();
  const phone = "5583998721848";
  const msg = t("services.company.BusinessLicense.whatsapp_msg");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center md:text-left"
          initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
          {t("services.company.BusinessLicense.title")}
        </motion.h1>

        <motion.p className="mb-6 text-lg text-gray-800" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
          {t("services.company.BusinessLicense.intro")}
        </motion.p>

        <motion.h2 className="text-xl font-semibold mt-4 mb-3 text-gray-900"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}}>
          {t("services.company.BusinessLicense.includes_title")}
        </motion.h2>

        <motion.ul className="list-disc list-inside mb-6 text-gray-700 space-y-1.5"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          <li>{t("services.company.BusinessLicense.includes.0")}</li>
          <li>{t("services.company.BusinessLicense.includes.1")}</li>
          <li>{t("services.company.BusinessLicense.includes.2")}</li>
          <li>{t("services.company.BusinessLicense.includes.3")}</li>
          <li>{t("services.company.BusinessLicense.includes.4")}</li>
        </motion.ul>

        <motion.div className="text-lg font-semibold text-green-700 mb-8"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}}>
          {t("services.company.BusinessLicense.price_label")}{" "}
          <span className="text-2xl text-green-800">{t("services.company.BusinessLicense.price")}</span>
        </motion.div>

        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.3}}>
          <a href={href} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition">
            <FaWhatsapp className="text-xl" />
            {t("services.company.BusinessLicense.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
