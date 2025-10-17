// src/pages/Ebooks.jsx
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Ebooks() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || "pt";

  const S = {
    pt: {
      title: "Ebooks HelpUS",
      intro:
        "Guias práticos para empreender e imigrar com segurança. Compre, baixe e aplique passo a passo.",
      buy: "Comprar agora",
      learnMore: "Ver detalhes",
    },
    en: {
      title: "HelpUS Ebooks",
      intro:
        "Practical guides to start and grow in the U.S. Buy, download, and follow step-by-step.",
      buy: "Buy now",
      learnMore: "Learn more",
    },
    es: {
      title: "Ebooks HelpUS",
      intro:
        "Guías prácticas para emprender e inmigrar con seguridad. Compra, descarga y aplica paso a paso.",
      buy: "Comprar ahora",
      learnMore: "Ver detalles",
    },
  }[lng];

  // 👉 Adicione/edite os produtos conforme lançar novos títulos
  const ebooks = [
    {
      id: "ebook-alabama-llc-ein",
      title:
        t("ebooks.alabama.title", {
          defaultValue: "Como abrir empresa no Alabama (LLC + EIN)",
        }),
      desc: t("ebooks.alabama.desc", {
        defaultValue:
          "Passo a passo completo, checklists, fluxos e links oficiais para você abrir sua LLC e emitir o EIN.",
      }),
      price: "US$ 29.00",
      cover: "/img/ebooks/alabama-llc-ein-capa.png", // coloque a imagem no /public/img/ebooks/
      // 🔗 Coloque aqui a URL do produto na Nuvemshop/Stripe/PayPal:
      buyUrl: "https://sualoja.nuvemshop.com.br/products/ebook-alabama-llc-ein",
      // opcional: link para landing / post com prévia
      detailsUrl: "/servicos/empresa", // ou uma rota específica do ebook, se quiser
      badges: ["PDF", "Atualizável", "Download imediato"],
    },
    // Próximos — placeholders:
    {
      id: "ebook-itin",
      title: t("ebooks.itin.title", {
        defaultValue: "ITIN na prática: W-7, cartas e envio",
      }),
      desc: t("ebooks.itin.desc", {
        defaultValue:
          "Como solicitar ITIN do zero, documentos aceitos, modelos e checklists.",
      }),
      price: "US$ 19.00",
      cover: "/img/ebooks/itin-capa.png",
      buyUrl: "#",
      detailsUrl: "/servicos/fiscal/itin",
      badges: ["PDF", "Modelos prontos"],
      disabled: true,
    },
  ];

  return (
    <section className="pt-24 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-700">{S.title}</h1>
          <p className="text-gray-700 mt-3">{S.intro}</p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((b) => (
            <article
              key={b.id}
              className="rounded-2xl border bg-gray-50 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-white">
                <img
                  src={b.cover}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-blue-800">{b.title}</h3>
                <p className="text-sm text-gray-700 mt-2 flex-1">{b.desc}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {(b.badges || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-700">{b.price}</span>
                  <div className="flex gap-2">
                    {b.detailsUrl && (
                      <a
                        href={b.detailsUrl}
                        className="text-sm px-3 py-2 rounded-full border hover:bg-gray-100 transition"
                      >
                        {S.learnMore}
                      </a>
                    )}
                    <a
                      href={b.disabled ? undefined : b.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm px-4 py-2 rounded-full text-white flex items-center gap-2 ${
                        b.disabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      aria-disabled={b.disabled}
                      onClick={(e) => b.disabled && e.preventDefault()}
                    >
                      {S.buy} <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          * Alguns títulos aparecem como “em breve”. Ative quando o checkout estiver
          disponível.
        </p>
      </div>
    </section>
  );
}
