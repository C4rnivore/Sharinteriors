/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import BackBtn from "../buttons/BackBtn";
import "./css/ProjectPageLayout.css";
import InfiniteImageSlider from "../infiniteSlider/InfiniteImageSlider";

interface ProjectPageLayoutProps {
  children: React.ReactNode;
  title: string;
  city: string;
  year: string;
  description: string[];
  images: string[];
  activeImage: number | null;
  setActiveImage: () => void;
  type: "private" | "public";
}

export default function ProjectPageLayout({
  children,
  title,
  city,
  year,
  description,
  images,
  activeImage,
  setActiveImage,
  type,
}: ProjectPageLayoutProps) {
  const [sliderStartIndex, setSliderStartIndex] = useState(activeImage);
  useEffect(() => {
    if (!activeImage) return;
    setSliderStartIndex(activeImage);
  }, [activeImage]);

  return (
    <section className="project-page-layout">
      <BackBtn
        title={type}
        desktopRoute={["projects", type, title]}
        destination={`/projects/${type}`}
      />
      <div className="project-page-layout__row project-page-layout__hero">
        <div className="project-page-layout__row-left">
          <div className="project-page-layout__title-container">
            <span className="project-page-layout__title">{title}</span>
            <span className="project-page-layout__city">{city}</span>
            <span className="project-page-layout__year"> {year} </span>
          </div>
          {description.map((text, index) => (
            <p
              className={`project-page-layout__description-text ${
                index === 0 ? "first-text" : ""
              }`}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="project-page-layout__row-right">
          <img
            className="project-page-layout__img"
            src={images[0]}
            alt=""
            loading="lazy"
            onClick={() => setSliderStartIndex(0)}
          />
        </div>
      </div>

      {children}

      {sliderStartIndex !== null ? (
        <InfiniteImageSlider
          content={images}
          startIndex={sliderStartIndex}
          closeFunction={() => {
            setSliderStartIndex(null);
            setActiveImage();
          }}
        />
      ) : (
        <></>
      )}
    </section>
  );
}
