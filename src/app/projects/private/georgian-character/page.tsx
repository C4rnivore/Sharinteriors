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
    "/img/projects/georgean-character/hero.png",
    "/img/projects/georgean-character/1.png",
    "/img/projects/georgean-character/2.png",
    "/img/projects/georgean-character/3.png",
    "/img/projects/georgean-character/4.png",
    "/img/projects/georgean-character/5.png",
    "/img/projects/georgean-character/6.png",
    "/img/projects/georgean-character/7.png",
    "/img/projects/georgean-character/8.png",
    "/img/projects/georgean-character/9.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Georgian character")}
      city={t("Tbilisi")}
      year={"2022"}
      description={[
        t("georgia-description-text"),
        t("georgia-description-text-extra"),
      ]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"private"}
    >
      <ProjectPageRow>
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
          alignItems: "start",
          marginTop: mobile ? "2.5vw" : "2.604vw",
          gap: mobile ? "2.083vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[2]}
            alt=""
            onClick={() => setActiveImage(2)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <p
            className="project-page-layout__text"
            style={{ marginBottom: !mobile ? "6.25vw" : "0vw" }}
          >
            {t("georgia-description-text-2")}
            <br />
            <br />
            {t("georgia-description-text-2-extra")}
          </p>
          <div
            className="project-page-layout__double"
            style={{ marginBottom: mobile ? "56.5vw" : "0vw" }}
          >
            <img
              className="project-page-layout__img"
              src={images[3]}
              alt=""
              onClick={() => setActiveImage(3)}
            />
            <img
              className="project-page-layout__img"
              src={images[4]}
              style={{ transform: mobile ? "translateY(56.5vw)" : "none" }}
              alt=""
              onClick={() => setActiveImage(4)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow style={{ marginTop: mobile ? "2.5vw" : "5.208vw" }}>
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[5]}
            alt=""
            onClick={() => setActiveImage(5)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[6]}
              alt=""
              style={{ marginTop: mobile ? "0vw" : "15.625vw" }}
              onClick={() => setActiveImage(6)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow style={{ marginTop: mobile ? "2.5vw" : "2.604vw" }}>
        <div className="project-page-layout__row-left"></div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: mobile ? "column" : "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[7]}
              alt=""
              onClick={() => setActiveImage(7)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow style={{ marginTop: mobile ? "2.5vw" : "2.604vw" }}>
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[8]}
            alt=""
            onClick={() => setActiveImage(8)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: mobile ? "column" : "row-reverse" }}
          >
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
