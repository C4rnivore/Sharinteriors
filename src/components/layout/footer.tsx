'use client'

import './css/Footer.css'
import logo from '@/assets/design/logo.svg'
import Image from 'next/image';
import { vkLink, waLink, inLink, tgLink, phoneRef, phoneLabel, gmail } from '@/lib/constants/constants';
import LanguageSwitcher from '@/components/buttons/languageSwitcher';
import NavLink from '@/components/routing/NavLink';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { PopupInitBtn } from '@/components/popup/popup';
import useMaxWidth from '@/lib/hooks/useMobile';

function Footer() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const mobile = useMaxWidth(480)

    const handleScrollTop = () => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    };

    if(mobile){
        return(
            <footer className="mobile-footer">
                <div className="mobile-menu-content-top">
                    <div className="footer-logo" onClick={() => router.push('/')}>
                        <Image src={logo} width={40} height={40} alt="" />
                        <div className="logo-labels">
                            <span>interior</span>
                            <span>design</span>
                            <span>studio</span>
                        </div>
                    </div>
                    <ul className='mobile-menu-nav'>
                        <li>
                            <NavLink href='/'>{t("home")}</NavLink>
                        </li>
                        <li>
                            <NavLink href='/about'>{t("about")}</NavLink>
                        </li>
                        <li>
                            <NavLink href='/projects'>{t("projects")}</NavLink>
                        </li>
                        <li>
                            <NavLink href='/contacts'>{t("contacts")}</NavLink>
                        </li>
                        <li>
                            <LanguageSwitcher/>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu-content-bottom">
                    <ul>
                        <li>
                            <a target="_blank" href={`tel:${phoneRef}`}>{phoneLabel}</a>
                        </li>
                        <li>
                            <a target="_blank" href={`mailto:${gmail}`}>{gmail}</a>
                        </li>
                    </ul>
                    <ul className='m-last-list'>
                        <li>
                            <a target="_blank" href={tgLink}>telegram</a>
                        </li>
                        <li>
                            <a target="_blank" href={inLink}>{t('contacts-inst')}</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="contact-link-conatiner footer-contact-link">
                        <PopupInitBtn/>
                    </div>
                    <NavLink href='/terms'>{t("terms")}</NavLink>
                </div>
            </footer>
        )
    }

    return ( 
        <footer>
            <div className="footer-content">
                <nav className="footer-nav">
                    <ul>
                        <li>
                            <NavLink onClick={handleScrollTop} href='/' basicClassName='header-nav-a'>
                                {t("home")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleScrollTop} href='/about' basicClassName='header-nav-a'>
                                {t("about")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleScrollTop} href='/projects' basicClassName='header-nav-a'>
                                {t("projects")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleScrollTop} href='/contacts' basicClassName='header-nav-a'>
                                {t("contacts")}
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <ul>
                    <li>
                        <a target="_blank" href={vkLink} className='header-nav-a'>vk.com</a>
                    </li>
                    <li>
                        <a target="_blank" href={waLink} className='header-nav-a'>whatsapp</a>
                    </li>
                    <li>
                        <a target="_blank" href={tgLink} className='header-nav-a'>telegram</a>
                    </li>
                    <li>
                        <a target="_blank" href={inLink} className='header-nav-a'>{t("contacts-inst")}</a>
                    </li>
                </ul>

                <div className="footer-logo"  onClick={() => router.push('/')}>
                    <Image className='' src={logo} width={40} height={40} alt="" />
                    <div className="logo-labels">
                        <span>interior</span>
                        <span>design</span>
                        <span>studio</span>
                    </div>
                </div>
            </div>
            <div className={i18n.language === 'ru'? "footer-bottom f-b-ru" :"footer-bottom f-b-en"}>
                <div className="contact-link-conatiner footer-contact-link">
                    <PopupInitBtn/>
                </div>
                <NavLink href='/terms'>
                    {t("terms")}
                </NavLink>
                <div className="f-placeholder"></div>
            </div>
        </footer>
    );
}

export default Footer;