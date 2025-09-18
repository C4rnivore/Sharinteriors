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
    "/img/projects/contemporary-comfort/hero.png",
    "/img/projects/contemporary-comfort/1.png",
    "/img/projects/contemporary-comfort/2.png",
    "/img/projects/contemporary-comfort/3.png",
    "/img/projects/contemporary-comfort/4.png",
    "/img/projects/contemporary-comfort/5.png",
    "/img/projects/contemporary-comfort/6.png",
    "/img/projects/contemporary-comfort/7.png",
    "/img/projects/contemporary-comfort/8.png",
    "/img/projects/contemporary-comfort/9.png",
    "/img/projects/contemporary-comfort/10.png",
    "/img/projects/contemporary-comfort/11.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Contemporary comfort")}
      city={t("Wrocław")}
      year={"2025"}
      description={[t("comfort-1"), t("comfort-2"), t("comfort-3")]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"private"}
    >
      <ProjectPageRow
        style={{
          marginTop: mobile ? "0" : "2.604vw",
          gap: mobile ? "10.417vw" : "none",
        }}
      >
        <div
          className="project-page-layout__row-left"
          style={{
            display: "flex",
            flexDirection: !mobile ? "column" : "column-reverse",
            gap: !mobile ? "none" : "10.417vw",
            justifyContent: "space-between",
            height: "auto",
          }}
        >
          <p className="project-page-layout__text">
            {t("comfort-4")}
            <br />
            <br />
            {t("comfort-5")}
            <br />
            <br />
            {t("comfort-6")}
            <br />
            <br />
            {t("comfort-7")}
          </p>

          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[1]}
              alt=""
              onClick={() => setActiveImage(1)}
            />
            <img
              className="project-page-layout__img"
              src={images[2]}
              alt=""
              onClick={() => setActiveImage(2)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <img
            className="project-page-layout__img"
            src={images[3]}
            alt=""
            onClick={() => setActiveImage(3)}
          />
        </div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "0" : "2.604vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[4]}
            alt=""
            style={{ marginTop: !mobile ? "14.323vw" : "10.417vw" }}
            onClick={() => setActiveImage(4)}
          />
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
          <div
            className="project-page-layout__double"
            style={{ alignItems: "flex-start" }}
          >
            <img
              className="project-page-layout__img"
              src={images[6]}
              alt=""
              style={{ marginTop: !mobile ? "12.5vw" : "25vw" }}
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
          <div
            className="project-page-layout__double"
            style={{
              marginTop: !mobile ? "-27vw" : "-25vw",
              alignItems: "flex-start",
            }}
          >
            <img
              className="project-page-layout__img"
              src={images[8]}
              alt=""
              onClick={() => setActiveImage(8)}
              style={{ marginTop: !mobile ? "12.5vw" : "25vw" }}
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

      <ProjectPageRow
        style={{
          marginTop: mobile ? "-22.5vw" : "2.604vw",
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
              src={images[10]}
              alt=""
              onClick={() => setActiveImage(10)}
            />
          </div>
        </div>
        <div className="project-page-layout__row-right">
          <img
            className="project-page-layout__img"
            src={images[11]}
            alt=""
            style={{ marginTop: !mobile ? "13.594vw" : "0vw" }}
            onClick={() => setActiveImage(11)}
          />
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
