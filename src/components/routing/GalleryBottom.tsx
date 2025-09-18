/* eslint-disable @next/next/no-img-element */
"use client";

import "./css/GalleryBottom.css";
import { useRouter } from "next/navigation";
import useMaxWidth from "@/lib/hooks/useMobile";
import { useRef, useState } from "react";
import { Div } from "@/lib/types/types";
import { projectsData } from "@/app/appData";

function GalleryBottom() {
  const router = useRouter();
  const wrapper = useRef<Div>(null);
  const [activeImage, setActiveImage] = useState(0);
  const mobile = useMaxWidth(480);
  const [imageWidth, setImageWidth] = useState(0);

  const handleGalleryScroll = (ev: React.UIEvent<HTMLDivElement>) => {
    const target = ev.target as HTMLDivElement;
    if (target.scrollLeft < imageWidth / 2) {
      setActiveImage(0);
    } else {
      const leftOffset = (innerWidth - imageWidth) / 2;
      setActiveImage(Math.ceil((target.scrollLeft + leftOffset) / imageWidth));
    }
  };

  //desktop
  const handleMouseEnter = () => {
    const g = document.querySelector(".about-bottom-gallery") as HTMLElement;
    g.classList.add("desaturate");
  };
  const handleMouseLeave = () => {
    const g = document.querySelector(".about-bottom-gallery") as HTMLElement;
    g.classList.remove("desaturate");
  };

  if (!mobile) {
    return (
      <div
        className="about-bottom-gallery"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {projectsData.private.map((project, index) => (
          <img
            key={index}
            title={project.title}
            src={project.image}
            alt=""
            onClick={() => router.push(project.path)}
          />
        ))}
        {projectsData.public.map((project, index) => (
          <img
            key={index}
            title={project.title}
            src={project.image}
            alt=""
            onClick={() => router.push(project.path)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="about-bottom-gallery-mobile">
        <div
          ref={wrapper}
          className="gall-wrapper"
          onScroll={handleGalleryScroll}
        >
          {projectsData.private.map((project, index) => (
            <img
              ref={(el) => {
                if (el && index === 0) {
                  setImageWidth(el.width);
                }
              }}
              key={index}
              title={project.title}
              src={project.image}
              alt=""
              className={`b-g-m-img ${
                index === activeImage ? "gal-active" : ""
              }`}
              onClick={() => router.push(project.path)}
            />
          ))}
          {projectsData.public.map((project, index) => (
            <img
              key={index}
              title={project.title}
              src={project.image}
              alt=""
              className={`b-g-m-img ${
                index + projectsData.private.length === activeImage
                  ? "gal-active"
                  : ""
              }`}
              onClick={() => router.push(project.path)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GalleryBottom;
