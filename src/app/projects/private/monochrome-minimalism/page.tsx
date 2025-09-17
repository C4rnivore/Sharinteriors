/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ProjectPageLayout from "@/components/layout/ProjectPageLayout";
import ProjectPageRow from "@/components/layout/ProjectPageRow";
import { useTranslation } from "react-i18next";
import useMaxWidth from "@/lib/hooks/useMobile";

export default function Page() {
  const { t } = useTranslation();
  const mobile = useMaxWidth(480);
  const images = [
    "/img/projects/monochrome-minimalism/hero.png",
    "/img/projects/monochrome-minimalism/1.png",
    "/img/projects/monochrome-minimalism/2.png",
    "/img/projects/monochrome-minimalism/3.png",
    "/img/projects/monochrome-minimalism/4.png",
    "/img/projects/monochrome-minimalism/5.png",
    "/img/projects/monochrome-minimalism/6.png",
    "/img/projects/monochrome-minimalism/7.png",
    "/img/projects/monochrome-minimalism/8.png",
    "/img/projects/monochrome-minimalism/9.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Monochrome minimalism")}
      city={t("Moscow")}
      year={"2021"}
      description={[
        t("monochrome-description-1"),
        t("monochrome-description-2"),
      ]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"private"}
    >
      <ProjectPageRow style={{ gap: mobile ? "2.5vw" : "none" }}>
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[1]}
            alt=""
            onClick={() => setActiveImage(1)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[2]}
              alt=""
              style={{ transform: !mobile ? "translateY(17.448vw)" : "none" }}
              onClick={() => setActiveImage(2)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "2.5vw" : "2.604vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[3]}
            alt=""
            onClick={() => setActiveImage(3)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: !mobile ? "row-reverse" : "row" }}
          >
            <img
              className="project-page-layout__img"
              src={images[4]}
              alt=""
              style={{ transform: !mobile ? "translateY(15.904vw)" : "none" }}
              onClick={() => setActiveImage(4)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "2.5vw" : "32.708vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[5]}
            alt=""
            onClick={() => setActiveImage(5)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[6]}
              alt=""
              style={{ transform: !mobile ? "translateY(-12vw)" : "none" }}
              onClick={() => setActiveImage(6)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "2.5vw" : "5.208vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[7]}
              alt=""
              onClick={() => setActiveImage(7)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[8]}
              alt=""
              onClick={() => setActiveImage(8)}
            />
            <img
              className="project-page-layout__img"
              src={images[9]}
              alt=""
              onClick={() => setActiveImage(9)}
            />
          </div>
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
