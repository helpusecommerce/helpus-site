// 📄 src/i18n.js
// Carrega traduções de /public/locales/{{lng}}/translation.json
// Requer: npm i i18next react-i18next i18next-http-backend
// (opcional) npx browserslist@latest --update-db

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// línguas suportadas
export const supportedLngs = ["en", "pt", "es"];

// preferências salvas
const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

// tenta detectar a do navegador quando não houver salva
function detectBrowserLang() {
  if (typeof navigator === "undefined") return null;
  const raw =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    "";
  const short = String(raw).slice(0, 2).toLowerCase();
  return supportedLngs.includes(short) ? short : null;
}

const initialLang = savedLang || detectBrowserLang() || "en";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: initialLang,
    fallbackLng: "en",
    supportedLngs,
    debug: process.env.NODE_ENV === "development",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
      crossDomain: true,
    },
    react: { useSuspense: false },
    // qualidade de vida
    returnEmptyString: false,
    cleanCode: true, // normaliza 'pt-BR' -> 'pt'
  });

// mantém <html lang="..."> e persiste idioma
if (typeof document !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    try {
      localStorage.setItem("lang", lng);
    } catch {}
  });
}

// helper opcional
export function setLanguage(lng) {
  if (supportedLngs.includes(lng)) i18n.changeLanguage(lng);
}

export default i18n;
