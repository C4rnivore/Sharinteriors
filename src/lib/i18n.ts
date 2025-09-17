import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../public/locales/en/translation.json";
import translationRU from "../../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Устанавливаем cookie при инициализации
if (typeof document !== "undefined") {
  const existingLanguage = document.cookie
    .split("; ")
    .find((row) => row.startsWith("language="))
    ?.split("=")[1];

  if (
    existingLanguage &&
    (existingLanguage === "en" || existingLanguage === "ru")
  ) {
    i18n.changeLanguage(existingLanguage);
  } else {
    // Устанавливаем cookie по умолчанию
    document.cookie = `language=en; path=/; max-age=31536000`;
  }
}

export default i18n;