"use client";

import "./css/HomeGallery.css";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import useMaxWidth from "@/lib/hooks/useMobile";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";

function HomeGallery(props: { extraPadding: boolean }) {
  const [prevPos, setPrevPos] = useState("1");
  const publicLabel = useRef<HTMLDivElement | null>(null);
  const privateLine = useRef<HTMLDivElement | null>(null);
  const publicLine = useRef<HTMLDivElement | null>(null);
  const privateLabel = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  const router = useRouter();
  const mobile = useMaxWidth(480);
  const [activeType, setActiveType] = useState("private");

  const MobileGalleryImage = (src: string, path: string, localeKey: string) => {
    return (
      <div className="mobile-gallery-img">
        <Image
          fill
          src={src}
          className="mobile-gallery-img"
          alt=""
          onClick={() => router?.push(path)}
        />
        {/* <img src={image.src} className='mobile-gallery-img' alt="" onClick={() => router?.push(path)}/> */}
        <span className="mobile-gallery-span">{t(localeKey)}</span>
      </div>
    );
  };

  const imagesPrivate =
    activeType === "private"
      ? [
          MobileGalleryImage(
            "/img/projects/WhiteAppartamentsHero.png",
            "/projects/private/white-appartaments",
            "White Apartament"
          ),
          MobileGalleryImage(
            "/img/projects/FusionInZamoskvorechyeHero.png",
            "/projects/private/fusion",
            "Fusion in Zamoskvorechye"
          ),
          MobileGalleryImage(
            "/img/projects/LoftInGeorgiaHero.png",
            "/projects/private/georgian-character",
            "Georgian character"
          ),
          MobileGalleryImage(
            "/img/projects/MonochromeMinimalismHero.png",
            "/projects/private/monochrome",
            "Monochrome minimalism"
          ),
          // <div className="mobile-gallery-img" >
          //     <img src={g1.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/private/white-appartaments')}/>
          //     <span className='mobile-gallery-span'>{t("White Apartament")}</span>
          // </div>,
          // <div className="mobile-gallery-img">
          //     <img src={g2.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/private/fusion')}/>
          //     <span className='mobile-gallery-span'>{t("Fusion in Zamoskvorechye")}</span>
          // </div>,
          // <div className="mobile-gallery-img">
          //     <img src={g3.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/private/georgian-character')}/>
          //     <span className='mobile-gallery-span'>{t("Georgian character")}</span>
          // </div>,
          // <div className="mobile-gallery-img">
          //     <img src={g4.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/private/monochrome')}/>
          //     <span className='mobile-gallery-span'>{t("Monochrome minimalism")}</span>
          // </div>
        ]
      : [
          MobileGalleryImage(
            "/img/projects/VintageCoffeeShopHero.png",
            "/projects/public/coffee-shop",
            "Vintage Coffee Shop"
          ),
          MobileGalleryImage(
            "/img/projects/HighTechOfficeHero.png",
            "/projects/public/hightech",
            "High-tech office"
          ),
          // <div className="mobile-gallery-img">
          //     <img src={g6.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/public/coffee-shop')}/>
          //     <span className='mobile-gallery-span'>{t("Vintage Coffee Shop")}</span>
          // </div>,
          // <div className="mobile-gallery-img">
          //     <img src={g5.src} className='mobile-gallery-img' alt="" onClick={()=>router.push('/projects/public/hightech')}/>
          //     <span className='mobile-gallery-span'>{t("High-tech office")}</span>
          // </div>
        ];

  const handleGalleryMouseOver = (pos: string) => {
    const curr = document.getElementById(pos);
    const prev = document.getElementById(prevPos);

    if (prev) prev.classList.remove("gallery-active");
    if (curr) curr.classList.add("gallery-active");
    if (curr && !curr.classList.contains("g-green")) switchIndicatorColor();

    setPrevPos(pos);
  };

  const switchIndicatorColor = () => {
    const images = document.querySelectorAll(".gallery-item");

    images.forEach((el) => {
      if (el.classList.contains("g-green")) el.classList.remove("g-green");
      else el.classList.add("g-green");
    });
  };

  const handleMobileLabelClick = (type: "private" | "public") => {
    if (
      !privateLine.current ||
      !publicLine.current ||
      !privateLabel.current ||
      !publicLabel.current
    )
      return;

    if (type === "private") {
      privateLine.current.classList.add("line-active");
      publicLine.current.classList.remove("line-active");

      privateLabel.current.classList.add("label-active");
      publicLabel.current.classList.remove("label-active");

      setActiveType("private");
    } else {
      privateLine.current.classList.remove("line-active");
      publicLine.current.classList.add("line-active");

      privateLabel.current.classList.remove("label-active");
      publicLabel.current.classList.add("label-active");

      setActiveType("public");
    }
  };

  if (!mobile) {
    return (
      <div
        className={
          props.extraPadding
            ? "home-gallery-wrapper home-g-e-p"
            : "home-gallery-wrapper"
        }
      >
        <div className="gallery-wrapper">
          <div
            id="1"
            className="gallery-item g-private gallery-active g-first g-green"
            style={{
              backgroundImage: `url('/img/projects/WhiteAppartamentsHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("1")}
            onClick={() => router.push("/projects/private/white-appartaments")}
          >
            <span className="gallery-span" onClick={(e) => e.preventDefault()}>
              {t("White Apartament")}
            </span>
            <span
              data-url="/private"
              id="g-private-label"
              className="gallery-label"
            >
              {t("private")}
            </span>
          </div>

          <div
            id="2"
            className="gallery-item g-private g-green"
            style={{
              backgroundImage: `url('/img/projects/FusionInZamoskvorechyeHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("2")}
            onClick={() => router?.push("/projects/private/fusion")}
          >
            <span className="gallery-span">
              {t("Fusion in Zamoskvorechye")}
            </span>
          </div>

          <div
            id="3"
            className="gallery-item g-private g-green"
            style={{
              backgroundImage: `url('/img/projects/LoftInGeorgiaHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("3")}
            onClick={() => router?.push("/projects/private/georgian-character")}
          >
            <span className="gallery-span">{t("Georgian character")}</span>
          </div>

          <div
            id="4"
            className="gallery-item g-private g-last g-green"
            style={{
              backgroundImage: `url('/img/projects/MonochromeMinimalismHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("4")}
            onClick={() => router?.push("/projects/private/monochrome")}
          >
            <span className="gallery-span">{t("Monochrome minimalism")}</span>
          </div>

          <div
            id="5"
            className="gallery-item g-public g-first"
            style={{
              backgroundImage: `url('/img/projects/HighTechOfficeHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("5")}
            onClick={() => router?.push("/projects/public/hightech")}
          >
            <span className="gallery-span">{t("High-tech office")}</span>
            <span data-url="/public" className="gallery-label">
              {t("public")}
            </span>
          </div>

          <div
            id="6"
            className="gallery-item g-public g-last"
            style={{
              backgroundImage: `url('/img/projects/VintageCoffeeShopHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("6")}
            onClick={() => router?.push("/projects/public/coffee-shop")}
          >
            <span className="gallery-span">{t("Vintage Coffee Shop")}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-gallery-mobile">
        <div className="lines-indicator">
          <div
            ref={privateLine}
            id="line-private"
            className="line line-active"
          ></div>
          <div ref={publicLine} id="line-public" className="line"></div>
        </div>
        <div className="lines-labels">
          <span
            ref={privateLabel}
            id="label-private"
            className="label-active"
            onClick={() => handleMobileLabelClick("private")}
          >
            {t("private")}
          </span>
          <span
            ref={publicLabel}
            id="label-public"
            onClick={() => handleMobileLabelClick("public")}
          >
            {t("public")}
          </span>
        </div>
        <div className="mobile-carousel">
          <AliceCarousel
            infinite
            mouseTracking
            disableDotsControls={true}
            disableButtonsControls={true}
            items={imagesPrivate}
          />
        </div>
      </div>
    );
  }
}

export default HomeGallery;
