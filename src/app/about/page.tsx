'use client'

import './css/About.css'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Header from '@/components/layout/header';
import GalleryBottom from '@/components/routing/GalleryBottom';

function About(){
    const { t } = useTranslation();
    const aboutVideoRef = useRef<HTMLVideoElement | null>(null)

    const handleMouseOver = async () =>{
        if(!aboutVideoRef.current) return
        try { await aboutVideoRef.current.play() }
        catch(err){}
    }

    const handleMouseLeave = async () =>{
        if(!aboutVideoRef.current) return
        try { aboutVideoRef.current.pause() }
        catch(err){}
    }

    const handleVideoTap = async ()=>{
        if(!aboutVideoRef.current) return

        if(aboutVideoRef.current.paused){
            try { await aboutVideoRef.current.play() }
            catch(err){}
        }
        else{
            try { aboutVideoRef.current.pause() }
            catch(err){}
        }
    }

    return(
        <>
            <section id="About">
                <div className="about-content">
                    <div className="about-content-left">
                        <div className="about-logo">
                            <span>{t("about-logo-1")}</span> 
                            <span>{t("about-logo-2")}</span>
                            <span>{t("about-logo-3")}</span>
                            <span className='about-green'>interior</span>
                        </div>
                        <div className="about-text">
                            <p>{t("about-first-p")}</p>
                            <p>{t("about-third-p")} {t("about-second-p")}</p>
                        </div>
                    </div>
                    <div className="about-content-right">
                        <div className="video-holder">
                            <video
                                className='about-video'
                                ref={aboutVideoRef} 
                                controls={false}
                                onMouseOver={handleMouseOver} 
                                onMouseLeave={handleMouseLeave}
                                onTouchStart={handleVideoTap}
                                onLoadedData={() =>{ aboutVideoRef.current?.pause() }} //pause video from autoplaying

                                loop
                                autoPlay //autoplay needs to correctly show video on Safari, IOS
                                muted
                                playsInline
                                preload='auto'
                            >
                                <source src="/video/about_vid.mp4" type='video/mp4' />
                                <source src="/video/about_vid.mov" type='video/mov' />
                            </video>
                        </div>
                        <div className='about-name-title'>
                            <span className='about-name'>
                                {t('about-name')}
                            </span> 
                            <span>
                                {t('about-founder')}
                            </span> 
                        </div>
                    </div>
                </div>
            </section>
            <GalleryBottom/>
        </>
    )
}

export default About