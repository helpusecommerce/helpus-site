// src/pages/servicos/documentos/Documentos.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFileSignature, FaGlobeAmericas, FaStamp, FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Documentos() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || "pt";

  const S = {
    pt: {
      title: "Documentos & Tradução",
      intro:
        "Intermediação completa para apostilamento, traduções certificadas/notarizadas e notary public. Atendemos casos com uso nos EUA e no Brasil.",
      onRequest: "Sob consulta",
      cta: "Contratar agora via WhatsApp",
      waPrefix: "Olá! Tenho interesse no serviço: ",
    },
    en: {
      title: "Documents & Translation",
      intro:
        "End-to-end support for apostille, certified/notarized translations, and notary public. For U.S. and Brazil use cases.",
      onRequest: "On request",
      cta: "Hire via WhatsApp",
      waPrefix: "Hello! I'm interested in the service: ",
    },
    es: {
      title: "Documentos y Traducción",
      intro:
        "Intermediación completa para apostilla, traducciones certificadas/notarizadas y notario público. Casos de uso en EE. UU. y Brasil.",
      onRequest: "A consultar",
      cta: "Contratar por WhatsApp",
      waPrefix: "¡Hola! Me interesa el servicio: ",
    },
  }[lng];

  const cards = [
    {
      rota: "/servicos/documentos/apostilamento", // se quiser criar subpáginas depois
      icon: <FaStamp className="text-3xl text-blue-600" />,
      title: t("services.docs.Apostille.title", { defaultValue: "Apostilamento (Apostille of Hague)" }),
      desc: t("services.docs.Apostille.desc", {
        defaultValue:
          "Intermediação junto às Secretaries of State para tornar seu documento válido internacionalmente.",
      }),
      price: S.onRequest,
    },
    {
      rota: "/servicos/documentos/traducao-certificada",
      icon: <FaLanguage className="text-3xl text-blue-600" />,
      title: t("services.docs.CertifiedTranslation.title", { defaultValue: "Tradução Certificada (USCIS-ready)" }),
      desc: t("services.docs.CertifiedTranslation.desc", {
        defaultValue:
          "Traduções aceitas por USCIS/consulados, com certificação e carta do tradutor conforme exigências.",
      }),
      price: "US$ 25.00 / página",
    },
    {
      rota: "/servicos/documentos/traducao-notarizada",
      icon: <FaFileSignature className="text-3xl text-blue-600" />,
      title: t("services.docs.NotarizedTranslation.title", { defaultValue: "Tradução Notarizada" }),
      desc: t("services.docs.NotarizedTranslation.desc", {
        defaultValue:
          "Certificação em cartório (notary public) do statement do tradutor, quando solicitado por instituições.",
      }),
      price: "US$ 39.00 / documento",
    },
    {
      rota: "/servicos/documentos/notary",
      icon: <FaGlobeAmericas className="text-3xl text-blue-600" />,
      title: t("services.docs.Notary.title", { defaultValue: "Notary Public (EUA)" }),
      desc: t("services.docs.Notary.desc", {
        defaultValue:
          "Reconhecimento de firma, jurats e autenticações. Presencial no Alabama (parceiro) e orientação para RON onde permitido.",
      }),
      price: S.onRequest,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{S.title}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">{S.intro}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, i) => {
            const waMsg = encodeURIComponent(`${S.waPrefix}${item.title}`);
            return (
              <div
                key={i}
                className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">
                    <Link to={item.rota} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <a
                    href={`https://wa.me/5583998721848?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    {S.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <img src="/selo-confiança.png" alt="Trust badge" className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">
            Atendimento seguro, discreto e aprovado por clientes reais.
          </p>
        </div>
      </div>
    </section>
  );
}
