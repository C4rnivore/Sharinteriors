'use client'

import g1 from '@/assets/about/gallery/1.webp'
import g2 from '@/assets/about/gallery/2.webp'
import g3 from '@/assets/about/gallery/3.webp'
import g4 from '@/assets/about/gallery/4.webp'
import g5 from '@/assets/about/gallery/5.webp'
import g6 from '@/assets/about/gallery/6.webp'

import './css/GalleryBottom.css'
import { useRouter } from 'next/navigation'
import useMaxWidth from '@/lib/hooks/useMobile'
import { useEffect, useRef, useState } from 'react'
import { Div } from '@/lib/types/types'


function GalleryBottom() {
    const [imgWidth, setImgWidth] = useState(336)
    const router = useRouter()
    const wrapper = useRef<Div>(null)
    const [boundaries, setBoundaries] = useState<Map<number[], number> | null>(null)
    const [imgOffset, setImgOffset] = useState<number | null>(null)
    const [images, setImages] = useState<NodeListOf<HTMLImageElement> | null>(null)
    const [prevActiveIndex, setPrevActiveIndex] = useState(0)
    const mobile = useMaxWidth(480)

    //mobile
    useEffect(()=>{
        if(mobile){
            const imgs:NodeListOf<HTMLImageElement> = document.querySelectorAll('.b-g-m-img')
            imgs[0].addEventListener('load',() => {
                setImgWidth(imgs[0].width)
                setImages(imgs)
                var windWidth = window.screen.width
                var off = (windWidth - imgs[0].width)
                setImgOffset(off)
            })
        }

    },[mobile])

    const handleGalleryScroll = () =>{
        if(!wrapper.current || !boundaries) return
        
        var sl = wrapper.current.scrollLeft
        if(boundaries === null){
            initBoundaries(6, sl)  //Количество фотографий в слайдере
        }
    
        boundaries.forEach((key, value) => {
            if(sl >= value[0] && sl < value[1]){
                if(key !== prevActiveIndex)
                    setActiveGalleryImage(key)
            }
        })
    }

    const setActiveGalleryImage = (index:number) =>{
        if(!images) return

        images[index].classList.add('gal-active')
        images[prevActiveIndex].classList.remove('gal-active')
        setPrevActiveIndex(index)
    }

    //Use initialScrollLeft to use offset on some resultions ( generally should be 0 )
    const initBoundaries = (count:number, initialScrollLeft:number) => {
        if(!imgOffset) return

        const tempB = new Map()
        var imageWidth = imgWidth
        var overflowOffset = 20

        for (let i = 0; i < count; i++) {
            if(i === 0){
                var firstEl = [0, imageWidth - imgOffset] 
                tempB.set(firstEl, 0)
            }
            else if( i === count-1 ){
                var offset = (i - 1) * overflowOffset
                var lastEl = [i * imageWidth - offset -  imgOffset, count * imageWidth - offset - imgOffset - initialScrollLeft]
                tempB.set(lastEl, count - 1)
            }
            else{
                var innerEl = [i * imageWidth - ((i - 1) * overflowOffset) - imgOffset - initialScrollLeft, (i + 1) * imageWidth - (i * overflowOffset) - imgOffset - initialScrollLeft]
                tempB.set(innerEl, i)
            }
        }
        setBoundaries(tempB)
    } 



    //desktop
    const handleMouseEnter = () =>{
        const g = document.querySelector('.about-bottom-gallery')as HTMLElement
        g.classList.add('desaturate')
    }
    const handleMouseLeave = () =>{
        const g = document.querySelector('.about-bottom-gallery') as HTMLElement
        g.classList.remove('desaturate')
    } 

    if(!mobile){
        return ( 
            <div className="about-bottom-gallery" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img title='White Appartaments' src={g1.src} alt="" onClick={()=>router.push('/projects/private/white-appartaments')}/>
                <img title='Fusion in Zamoskvorechye' src={g2.src} alt="" onClick={()=>router.push('/projects/private/fusion')}/>
                <img title='Georgian character' src={g3.src} alt="" onClick={()=>router.push('/projects/private/georgian-character')}/>
                <img title='Monochrome minimalism' src={g4.src} alt="" onClick={()=>router.push('/projects/private/monochrome')}/>
                <img title='High-tech office' src={g5.src} alt="" onClick={()=>router.push('/projects/public/hightech')}/>
                <img title='Vintage Coffee Shop' src={g6.src} alt="" onClick={()=>router.push('/projects/public/coffee-shop')}/>
            </div>
        );
    }
    else{
        return(
            <div className="about-bottom-gallery-mobile">
                <div ref={wrapper} className="gall-wrapper"
                onScroll={handleGalleryScroll}>
                    <img draggable='false' className='b-g-m-img gal-active' title='White Appartaments' src={g1.src} alt="" onClick={()=>router.push('/projects/private/white-appartaments')}/>
                    <img draggable='false'  className='b-g-m-img' title='Fusion in Zamoskvorechye' src={g2.src} alt="" onClick={()=>router.push('/projects/private/fusion')}/>
                    <img draggable='false'  className='b-g-m-img' title='Georgian character' src={g3.src} alt="" onClick={()=>router.push('/projects/private/georgian-character')}/>
                    <img draggable='false'  className='b-g-m-img' title='Monochrome minimalism' src={g4.src} alt="" onClick={()=>router.push('/projects/private/monochrome')}/>
                    <img draggable='false'  className='b-g-m-img' title='High-tech office' src={g5.src} alt="" onClick={()=>router.push('/projects/public/hightech')}/>
                    <img draggable='false'  className='b-g-m-img' title='Vintage Coffee Shop' src={g6.src} alt="" onClick={()=>router.push('/projects/public/coffee-shop')}/>
                </div>
            </div>
        )
    } 
}

export default GalleryBottom;