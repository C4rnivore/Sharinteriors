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
    "/img/projects/white-appartaments/hero.png",
    "/img/projects/white-appartaments/1.png",
    "/img/projects/white-appartaments/2.png",
    "/img/projects/white-appartaments/3.png",
    "/img/projects/white-appartaments/4.png",
    "/img/projects/white-appartaments/5.png",
    "/img/projects/white-appartaments/6.png",
    "/img/projects/white-appartaments/7.png",
    "/img/projects/white-appartaments/8.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("White apartaments")}
      city={t("Yekaterinburg")}
      year={"2023"}
      description={[t("white-decription-text")]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"private"}
    >
      <ProjectPageRow
        style={{ alignItems: "center", gap: mobile ? "2.083vw" : "none" }}
      >
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
            style={{ marginBottom: mobile ? "56.5vw" : "0vw" }}
          >
            <img
              className="project-page-layout__img"
              src={images[2]}
              alt=""
              onClick={() => setActiveImage(2)}
            />
            <img
              className="project-page-layout__img"
              src={images[3]}
              style={{ transform: mobile ? "translateY(56.5vw)" : "none" }}
              alt=""
              onClick={() => setActiveImage(3)}
            />
          </div>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          alignItems: "start",
          marginTop: mobile ? "2.5vw" : "5.208vw",
          gap: mobile ? "10.417vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[4]}
            alt=""
            onClick={() => setActiveImage(1)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <p className="project-page-layout__text">{t("white-extra-text-1")}</p>
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          alignItems: "start",
          marginTop: mobile ? "2.5vw" : "5.208vw",
          gap: mobile ? "10.417vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <p className="project-page-layout__text">{t("white-extra-text-2")}</p>
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
          alignItems: "end",
          marginTop: mobile ? "2.5vw" : "15.208vw",
          gap: mobile ? "2.083vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[6]}
              alt=""
              onClick={() => setActiveImage(6)}
            />
            <img
              className="project-page-layout__img"
              src={images[7]}
              alt=""
              onClick={() => setActiveImage(7)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <img
            className="project-page-layout__img"
            src={images[8]}
            alt=""
            style={{ transform: !mobile ? "translateY(-10.417vw)" : "none" }}
            onClick={() => setActiveImage(8)}
          />
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
