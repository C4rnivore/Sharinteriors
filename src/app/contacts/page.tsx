'use client'

import './css/Contacts.css'

import { vkLink, waLink, inLink, tgLink, phoneRef, phoneLabel, gmail } from '@/lib/constants/constants';
import { initPopup }from '@/components/popup/popup';
import { useTranslation } from 'react-i18next';

import GalleryBottom from '@/components/routing/GalleryBottom';
import contact from '@/assets/contacts/contact-arrow.svg'
import logo from '@/assets/contacts/Group 35042.svg'
import Wave from '@/components/contacts/wave';
import Header from '@/components/layout/header';

function Contacts(){
    const { t } = useTranslation();

    return(
        <>
            <Header/>
            <section id="Contacts">
                <div className="contacts-wrapper">
                    <div className="contacts">
                        <div className="contacts-top">
                            <div className="top-logo">
                                <img draggable={false} src={logo.src} alt="" />
                            </div>
                            <div className="top-data">
                                <a className='header-nav-a' href={`tel:${phoneRef}`}>{phoneLabel}</a>
                                <a className='header-nav-a' href={`mailto:${gmail}`}>{gmail}</a>
                            </div>
                        </div>
                        <Wave/>
                        <div className="contacts-bottom">
                            <ul className='contacts-list-desc'>
                                <li>
                                    <a target='_blank' className='header-nav-a' href={vkLink}>vk.com</a>   
                                </li>
                                <li>
                                    <a target='_blank' className='header-nav-a' href={waLink}>whatsapp</a> 
                                </li>
                                <li>
                                    <a target='_blank' className='header-nav-a' href={tgLink}>telegram</a> 
                                </li>
                                <li>
                                    <a target='_blank' className='header-nav-a' href={inLink}>{t("contacts-inst")}</a> 
                                </li>
                            </ul>
                            <ul className='contacts-list-mobile'>
                                <li className="left-col">
                                    <a target='_blank' className='header-nav-a' href={vkLink}>vk.com</a>  
                                    <a target='_blank' className='header-nav-a' href={waLink}>whatsapp</a>  
                                </li>
                                <li className="right-col">
                                    <a target='_blank' className='header-nav-a' href={tgLink}>telegram</a>
                                    <a target='_blank' className='header-nav-a' href={inLink}>{t("contacts-inst")}</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-zone">
                        <button className="popup-btn" onClick={initPopup}>
                            <div className="popup-btn-text">
                                <span>{t("contact-us")}</span>
                                <div className="arrow-bottom">
                                    <img src={contact.src} alt="" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <GalleryBottom/>
            </section>
        </>
    )
}

export default Contacts