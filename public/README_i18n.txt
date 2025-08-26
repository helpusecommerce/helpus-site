HelpUS i18n JSONs (to use with i18next HTTP backend)

Place the 'locales' folder inside your project's /public directory:

  public/
    locales/
      en/translation.json
      pt/translation.json
      es/translation.json

If you want to switch from inline 'resources' to file-based loading, install the HTTP backend:
  npm i i18next-http-backend

Then adapt your src/i18n.js like this (example):

  import i18n from "i18next";
  import { initReactI18next } from "react-i18next";
  import HttpBackend from "i18next-http-backend";

  const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: savedLang || "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      backend: { loadPath: "/locales/{{lng}}/translation.json" },
      react: { useSuspense: false },
    });

  if (typeof document !== "undefined") {
    i18n.on("languageChanged", (lng) => {
      document.documentElement.lang = lng;
      localStorage.setItem("lang", lng);
    });
  }

Notes:
- The JSONs mirror exactly the content you provided (EN, PT, ES).
- You can keep your current inline 'resources' as a fallback while testing, or remove them once file loading works.
- If you already have 'public/locales', merge or replace as needed.