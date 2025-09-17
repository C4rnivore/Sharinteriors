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
    "/img/projects/fusion/hero.png",
    "/img/projects/fusion/1.png",
    "/img/projects/fusion/2.png",
    "/img/projects/fusion/3.png",
    "/img/projects/fusion/4.png",
    "/img/projects/fusion/5.png",
    "/img/projects/fusion/6.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("Fusion in Zamoskvorechye")}
      city={t("Moscow")}
      year={"2021"}
      description={[t("fusion-decription-text")]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"private"}
    >
      <ProjectPageRow
        style={{ alignItems: "center", gap: mobile ? "2.083vw" : "none" }}
      >
        <div className="project-page-layout__row-left">
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
          alignItems: "end",
          gap: mobile ? "2.083vw" : "none",
          marginTop: mobile ? "10.417vw" : "5.208vw",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[4]}
            alt=""
            onClick={() => setActiveImage(4)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div className="project-page-layout__double">
            <img
              className="project-page-layout__img"
              src={images[5]}
              alt=""
              onClick={() => setActiveImage(5)}
            />
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
