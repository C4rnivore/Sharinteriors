'use client'

import './css/HomeMain.css'
import LanguageSwitcher from '@/components/buttons/languageSwitcher'
import mainImage from '@/assets/design/main-new2.webp'
import shar from '@/assets/design/mobile/Vector.svg'
import Header from '@/components/layout/header'
import useScrollTop from '@/lib/hooks/useScrollTop'
import logo from '@/assets/design/logo.svg'
import { PopupInitBtn } from '@/components/popup/popup'
import Sketch from '@/lib/three_distortion/Distortion'

import  NavLink  from '@/components/routing/NavLink'
import { toggleBodyScrollable } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'usehooks-ts'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { inLink, tgLink, phoneRef, phoneLabel, gmail } from '@/lib/constants/constants';

function HomeMain(){
    useScrollTop()
    const subtitleRef = useRef(null)
    const [ loading, setLoading ] = useState(true)
    const { t } = useTranslation();
    const mobile = useMediaQuery('(max-width: 480px)')

    useEffect(() => {
        if(!mobile){
            new Sketch({
                dom: document.getElementById("homeCanvas")
            });
        }
        setTimeout(() => {
            setLoading(false)
        },1000)
    }, [mobile]);

    if(!mobile){
        return(
            <>
                <div className="loader" style={{opacity: loading ? 1:0}}>
                    <div className="loader-overflower"></div>
                    <img className='img-loader' src={logo.src} alt="" />
                </div>
                <section id="Home">
                    <div id="homeCanvas" data-grid="70" data-mouse="0.25" data-strength="0.05" data-relaxation='0.9'>
                        <img src={mainImage.src} alt=""/>
                    </div>
                    <div className="home-content">
                        <Header/>
                        <div className="contact-link-conatiner">
                            <PopupInitBtn/>
                        </div>
                        <h2 ref={subtitleRef} className='subtitle-home'>interior design studio</h2>
                    </div>
                    <div className="home-logo-container">
                        <span>Sha</span>
                        <span className='h-l-c-last'>r</span>
                        <img src={logo.src} alt="" />
                    </div>
                </section>
            </> 
        )
    }
    else{
        return(
            <>
                <div className="loader" style={{opacity:loading?1:0}}>
                    <div className="loader-overflower"></div>
                    <img className='img-loader' src={logo.src} alt="" />
                </div>
                <section id="Home">
                    <div className="home-content">
                        <Header/>
                        <h2 ref={subtitleRef} className='subtitle-home'>interior design studio</h2>
                        <div className="mobile-menu-content">
                            <div className="mobile-menu-content-top">
                                <ul className='mobile-menu-nav'>
                                    <li>
                                        <NavLink href='/'>{t("home")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href='/about' onClick={()=> toggleBodyScrollable()}>{t("about")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href='/projects' onClick={()=> toggleBodyScrollable()}>{t("projects")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href='/contacts' onClick={()=> toggleBodyScrollable()}>{t("contacts")}</NavLink>
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
                            <img src={shar.src} alt="" className="shar-menu-texture" />
                        </div>
                    </div>
                    <div className="home-logo-container">
                            <span>Sha</span>
                            <span className='h-l-c-last'>r</span>
                            <img src={logo.src} alt="" />
                    </div>
                </section>
            </> 
        )
    }
}

export default HomeMain;