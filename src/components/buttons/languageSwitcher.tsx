import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // Initialize i18n

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguageChange = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);

    // Сохраняем язык в cookies для использования в серверных компонентах
    document.cookie = `language=${newLanguage}; path=/; max-age=31536000`; // 1 год
  };

  return (
    <button
      id="lng-swt"
      className="header-btn header-btn-mobile lng-switcher"
      onClick={toggleLanguageChange}
    >
      {i18n.language === "ru" ? "en" : "ru"}
    </button>
  );
}

export default LanguageSwitcher;
