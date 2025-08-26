// 📄 src/i18n.js
// i18next setup loading translations from /public/locales/{{lng}}/translation.json
// Requires: npm i i18next react-i18next i18next-http-backend

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// Read saved language from localStorage (if present)
const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

// Initialize i18n
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLang || "en",
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "es"],
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
      // allow cross-origin in dev environments if needed
      crossDomain: true,
    },
    react: { useSuspense: false },
  });

// Keep <html lang="..."> and persist language
if (typeof document !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    try { localStorage.setItem("lang", lng); } catch {}
  });
}

// Optional helper to switch language programmatically
export function setLanguage(lng) {
  i18n.changeLanguage(lng);
}

export default i18n;