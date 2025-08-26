// 📄 src/pages/vistos/Vistos.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Vistos() {
  const { t } = useTranslation();

  // Mapeia os cards para as chaves existentes em services.visas.list.*
  const servicos = [
    {
      rota: "/vistos/b1b2",
      key: "B1B2",
    },
    {
      rota: "/vistos/f1",
      key: "F1",
    },
    {
      rota: "/vistos/f2",
      key: "F2",
    },
    {
      rota: "/vistos/familia",
      key: "Familia",
    },
    {
      rota: "/vistos/eb1a",
      key: "EB1A",
    },
    {
      rota: "/vistos/eb2niw",
      key: "EB2NIW",
    },
    {
      rota: "/vistos/renovacao",
      key: "Renovacao",
    },
    {
      rota: "/vistos/casosespeciais",
      key: "CasosEspeciais",
    },
    // "Outros Vistos de Trabalho" não existe no JSON -> usar fallback
    {
      rota: "/vistos/outrostrabalho",
      key: null,
      tituloFallback: "Outros Vistos de Trabalho",
      descFallback: "H1B, L1, O1 e demais vistos específicos conforme seu perfil.",
    },
    {
      rota: "/vistos/complementares",
      key: "Complementares",
    },
  ];

  return (
    <div className="pt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-800">
        {/* Você pode escolher entre estas duas opções de título: */}
        {/* 1) Título curto da seção de vistos */}
        {/* {t('services.visas.title')} */}
        {/* 2) Headline de cartão da home (mais descritivo) */}
        {t("home.cards.visas.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicos.map((s, i) => {
          const titulo = s.key
            ? t(`services.visas.list.${s.key}.title`)
            : t(`services.visas.pages.OutrosTrabalho.title`, {
                defaultValue: s.tituloFallback,
              });

          const desc = s.key
            ? t(`services.visas.list.${s.key}.desc`)
            : t(`services.visas.pages.OutrosTrabalho.intro`, {
                defaultValue: s.descFallback,
              });

          return (
            <Link
              key={i}
              to={s.rota}
              className="border rounded-lg p-6 shadow hover:bg-gray-100 transition text-left"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-700">
                {titulo}
              </h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
