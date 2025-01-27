import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      guides: "Guides",
      blog: "Blog",
      store: "Store",
      upgrade: "Upgrade",
      balance: "Balance",
      notifications: "Notifications",
    },
  },
  ru: {
    translation: {
      guides: "Руководства",
      blog: "Блог",
      store: "Магазин",
      upgrade: "Обновить",
      balance: "Баланс",
      notifications: "Уведомления",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
