"use client";

import "./css/HomeGallery.css";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import useMaxWidth from "@/lib/hooks/useMobile";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";
import { projectsData } from "@/app/appData";

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

  const mobileImages =
    activeType === "private"
      ? [
          MobileGalleryImage(
            projectsData.private[0].image,
            projectsData.private[0].path,
            projectsData.private[0].title
          ),
          MobileGalleryImage(
            projectsData.private[1].image,
            projectsData.private[1].path,
            projectsData.private[1].title
          ),
          MobileGalleryImage(
            projectsData.private[2].image,
            projectsData.private[2].path,
            projectsData.private[2].title
          ),
          MobileGalleryImage(
            projectsData.private[3].image,
            projectsData.private[3].path,
            projectsData.private[3].title
          ),
        ]
      : [
          MobileGalleryImage(
            projectsData.public[0].image,
            projectsData.public[0].path,
            projectsData.public[0].title
          ),
          MobileGalleryImage(
            projectsData.public[1].image,
            projectsData.public[1].path,
            projectsData.public[1].title
          ),
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
          {projectsData.private
            .slice(0, projectsData.privateCount)
            .map((project, index) => {
              const className =
                index === 0
                  ? "gallery-item g-private gallery-active g-first g-green"
                  : index === projectsData.privateCount - 1
                  ? "gallery-item g-private g-last g-green"
                  : "gallery-item g-private g-green";
              return (
                <div
                  key={index}
                  id={`${index + 1}`}
                  className={className}
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                  onMouseOver={() => handleGalleryMouseOver(`${index + 1}`)}
                  onClick={() => router.push(project.path)}
                >
                  <span
                    className="gallery-span"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t(project.title)}
                  </span>
                  {index === 0 && (
                    <span
                      data-url="/private"
                      id="g-private-label"
                      className="gallery-label"
                    >
                      {t("private")}
                    </span>
                  )}
                </div>
              );
            })}

          <div
            id="5"
            className="gallery-item g-public g-first"
            style={{
              backgroundImage: `url('/img/projects/HighTechOfficeHero.png')`,
            }}
            onMouseOver={() => handleGalleryMouseOver("5")}
            onClick={() => router?.push("/projects/public/high-tech-office")}
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
            items={mobileImages}
          />
        </div>
      </div>
    );
  }
}

export default HomeGallery;
