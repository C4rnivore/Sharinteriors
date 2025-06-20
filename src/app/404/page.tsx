'use client'

import './css/nf.css'

import { useTranslation } from 'next-i18next';

import all from '@/assets/404/all.svg'
import Image from 'next/image';
import Link from 'next/link';

function Custom404() {
    // TODO: Fix translations

    const {t} = useTranslation()

    return ( 
        <section className='nf-page'>
            <div className="nf-page-wrapper">
                <Image src={all} width={100} height={100} alt=''/>
                <span className='nf-text'>
                    {t("404-msg")}
                </span>
                <Link href='/'>
                    <span>
                        {t("404-anchor")}
                    </span>
                </Link>
            </div>
        </section>
     );
}

export default Custom404;