// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Quick Check Dapp!",
      submitClaim: "Submit a Claim",
      // Add other translations here
    },
  },
  yor: {
    translation: {
      welcome: "Kaabo si Quick Check Dapp!",
      submitClaim: "Fi ẹtọ silẹ",
      // Add other translations here
    },
  },
  ig: {
    translation: {
      welcome: "Nnọọ na Quick Check Dapp!",
      submitClaim: "Tinye ikpe",
      // Add other translations here
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
