import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguageChange = () => {
        if (i18n.language === 'ru') 
            i18n.changeLanguage('en');
        else 
            i18n.changeLanguage('ru');
    };
    
    return ( 
            <button id='lng-swt' className='header-btn header-btn-mobile lng-switcher' onClick={toggleLanguageChange}>
                {i18n.language === 'ru'? 'en':'ru'}
            </button>
     );
}

export default LanguageSwitcher;