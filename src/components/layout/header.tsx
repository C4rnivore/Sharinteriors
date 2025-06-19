'use client'

import './css/Header.css'
import { gmail, inLink, phoneLabel, phoneRef, tgLink } from '@/lib/constants/constants'
import { toggleBodyScrollable, enableBodyScroll} from '@/lib/utils'
import { useTranslation, initReactI18next } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'

import LanguageSwitcher from '@/components/buttons/languageSwitcher'
import useHomeTransition from '@/lib/hooks/useHomeTransition'
import translationEN from '@/locales/en/translation.json'
import translationRU from '@/locales/ru/translation.json'
import shar from '@/assets/design/mobile/Vector.svg'
import NavLink from '@/components/routing/NavLink'
import logo from '@/assets/design/logo.svg'
import Image from 'next/image'
import i18n from "i18next"

const resources = {
    en: {
        translation: translationEN,
    },
    ru:{
        translation: translationRU
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
})

function Header(){
    const path = usePathname()
    const router = useRouter()
    const homePage = path === '/'
    const { t } = useTranslation();
    const { handleAbout, handleProjects, handleContacts } = useHomeTransition(500)

    const handleMobileNavClick = () =>{
        if(homePage){
            toggleBodyScrollable()
            handleHomePageBtnClcik()
        }
        else{
            toggleBodyScrollable()
            const headerMobileBtn = document.getElementById('mobile-menu-toggle')
            const mobileMenu = document.querySelector('.mobile-menu')

            headerMobileBtn && headerMobileBtn.classList.toggle('header-mobile-btn-toggled')
            mobileMenu && mobileMenu.classList.toggle('mobile-menu-toggled')
        }
    }

    const handleLogoClick = () =>{
        enableBodyScroll()
        router.push('/')
    }
    
    const handleHomePageBtnClcik = () => {
        const home = document.getElementById('Home')
        const header = document.querySelector('.header-el')
        const homeContent  = document.querySelector('.home-content') 
        const homeTitle = document.querySelector('.home-logo-container') 
        const headerMobileBtn = document.getElementById('mobile-menu-toggle') 
        const heroSubtitle = document.querySelector('.subtitle-home') 

        homeContent?.classList.toggle('expanded-mobile')
        homeTitle?.classList.toggle('home-logo-hidden')
        headerMobileBtn?.classList.toggle('header-mobile-btn-toggled')
        headerMobileBtn?.classList.toggle('mobile-btn-left')
        heroSubtitle?.classList.toggle('hero-subtitle-hidden')
        home?.classList.toggle('home-mobile-expanded')
        header?.classList.toggle('header-m-toggled')
    }

    return(
    <>
        <div id={'main-header'} className="header-container">
            <header className={homePage ? 'header-el' : 'header-el header-m-toggled'}>
                <button id={'mobile-menu-toggle' } onClick={handleMobileNavClick} className={homePage ? 'mobile-menu-toggle-btn' : 'mobile-menu-toggle-btn mobile-btn-left'}>
                    <div className="toggle-line fst"></div>
                    <div className="toggle-line md"></div>
                    <div className="toggle-line end"></div>
                </button>
                <nav className='header-nav'>
                    <NavLink basicClassName={'header-nav-a'} href={'/'}>
                        {t("home")}
                    </NavLink>
                    <NavLink basicClassName={'header-nav-a'} onClick={handleAbout} href={'/about'}>
                        {t("about")}
                    </NavLink>
                    <NavLink basicClassName={'header-nav-a'} onClick={handleProjects} href={'/projects'}>
                        {t("projects")}
                    </NavLink>
                    <NavLink basicClassName={'header-nav-a'} onClick={handleContacts} href={'/contacts'}>
                        {t("contacts")}
                    </NavLink>
                </nav>

                <LanguageSwitcher/>
                <div className="header-logo" onClick={handleLogoClick}>
                    <Image src={logo} alt='' width={60} height={60}/>
                    <div className="logo-labels">
                        <span>interior</span>
                        <span>design</span>
                        <span>studio</span>
                    </div>
                </div>
            </header>
            <div className="mobile-menu">
                <div className="mobile-menu-content_outer">
                    <div className="mobile-menu-content-top">
                        <ul className='mobile-menu-nav'>
                            <li>
                                <NavLink href='/' onClick={handleMobileNavClick}>{t("home")}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/about' onClick={handleMobileNavClick}>{t("about")}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/projects' onClick={handleMobileNavClick}>{t("projects")}</NavLink>
                            </li>
                            <li>
                                <NavLink href='/contacts' onClick={handleMobileNavClick}>{t("contacts")}</NavLink>
                            </li>
                            <li><LanguageSwitcher/></li>
                        </ul>
                    </div>
                    <div className="mobile-menu-content-bottom">
                        <ul>
                            <li>
                                <a target="_blank" href={tgLink}>telegram</a>
                            </li>
                            <li>
                                <a target="_blank" href={inLink}>{t('contacts-inst')}</a>
                            </li>
                            <li>
                                <a target="_blank" href={`tel:${phoneRef}`}>{phoneLabel}</a>
                            </li>
                            <li>
                                <a target="_blank" href={`mailto:${gmail}`}>{gmail}</a>
                            </li>
                        </ul>
                    </div>
                    <Image src={shar} alt='' width={60} height={60} className="shar-menu-texture"/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header