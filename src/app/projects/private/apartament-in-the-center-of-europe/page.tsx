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
    "/img/projects/appartament-in-the-center-of-europe/hero.png",
    "/img/projects/appartament-in-the-center-of-europe/1.png",
    "/img/projects/appartament-in-the-center-of-europe/2.png",
    "/img/projects/appartament-in-the-center-of-europe/3.png",
    "/img/projects/appartament-in-the-center-of-europe/4.png",
    "/img/projects/appartament-in-the-center-of-europe/5.png",
    "/img/projects/appartament-in-the-center-of-europe/6.png",
    "/img/projects/appartament-in-the-center-of-europe/7.png",
    "/img/projects/appartament-in-the-center-of-europe/8.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Apartament in the center of Europe")}
      city={t("Wrocław")}
      year={"2025"}
      description={[t("poland-head-text-1"), t("poland-desc-text-4")]}
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
        <div className="project-page-layout__row-right"></div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "0" : "2.604vw",
          gap: mobile ? "10.417vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: !mobile ? "row-reverse" : "row" }}
          >
            <img
              className="project-page-layout__img"
              src={images[2]}
              alt=""
              onClick={() => setActiveImage(2)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <p
            className="project-page-layout__text"
            style={{ marginBottom: !mobile ? "6.25vw" : "10.417vw" }}
          >
            {t("poland-desc-text-1")}
            <br />
            <br />
            {t("poland-desc-text-2")}
            <br />
            <br />
            {t("poland-desc-text-3")}
          </p>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "0" : "1.042vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <img
              className="project-page-layout__img"
              src={images[4]}
              alt=""
              onClick={() => setActiveImage(4)}
              style={{ marginLeft: !mobile ? "auto" : "none" }}
            />
            <img
              className="project-page-layout__img"
              src={images[3]}
              alt=""
              onClick={() => setActiveImage(3)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <img
            className="project-page-layout__img"
            src={images[5]}
            alt=""
            onClick={() => setActiveImage(5)}
          />
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
            src={images[6]}
            alt=""
            onClick={() => setActiveImage(6)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ marginTop: !mobile ? "44.479vw" : "0" }}
          >
            <img
              className="project-page-layout__img"
              src={images[7]}
              alt=""
              onClick={() => setActiveImage(7)}
            />
            <img
              className="project-page-layout__img"
              src={images[8]}
              alt=""
              onClick={() => setActiveImage(8)}
            />
          </div>
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
