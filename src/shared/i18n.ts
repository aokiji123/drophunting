import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        guides: "Guides",
        blog: "Blog",
        store: "Store",
        upgrade: "Upgrade",
      },
    },
    ru: {
      translation: {
        guides: "Руководства",
        blog: "Блог",
        store: "Магазин",
        upgrade: "Улучшить",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
