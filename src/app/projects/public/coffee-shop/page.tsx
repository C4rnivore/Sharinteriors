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
    "/img/projects/coffee-shop/hero.png",
    "/img/projects/coffee-shop/1.png",
    "/img/projects/coffee-shop/2.png",
    "/img/projects/coffee-shop/3.png",
    "/img/projects/coffee-shop/4.png",
    "/img/projects/coffee-shop/5.png",
    "/img/projects/coffee-shop/6.png",
    "/img/projects/coffee-shop/7.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Vintage Coffee Shop")}
      city={t("Saint-Petersburg")}
      year={"2021"}
      description={[
        t("coffee-description-text"),
        t("coffee-description-text-extra"),
      ]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"public"}
    >
      <ProjectPageRow style={{ gap: mobile ? "10.417vw" : "0" }}>
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[1]}
            alt=""
            onClick={() => setActiveImage(1)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <p className="project-page-layout__text">
            {t("coffee-description-text-2")}
          </p>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          gap: mobile ? "2.5vw" : "none",
          marginTop: mobile ? "10.417vw" : "1.042vw",
        }}
      >
        <div className="project-page-layout__row-left">
          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[2]}
              alt=""
              onClick={() => setActiveImage(2)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: mobile ? "column" : "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[3]}
              alt=""
              onClick={() => setActiveImage(3)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          gap: mobile ? "2.5vw" : "none",
          marginTop: mobile ? "-53.5vw" : "1.042vw",
        }}
      >
        <div className="project-page-layout__row-left">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[4]}
              alt=""
              onClick={() => setActiveImage(4)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[5]}
              alt=""
              onClick={() => setActiveImage(5)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          gap: mobile ? "2.5vw" : "none",
          marginTop: mobile ? "0" : "1.042vw",
        }}
      >
        <div className="project-page-layout__row-left"></div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ flexDirection: mobile ? "row-reverse" : "row" }}
          >
            <img
              className="project-page-layout__img"
              src={images[6]}
              alt=""
              onClick={() => setActiveImage(6)}
            />
          </div>
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
