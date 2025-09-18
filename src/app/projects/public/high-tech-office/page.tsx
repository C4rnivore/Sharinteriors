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
    "/img/projects/high-tech-office/hero.png",
    "/img/projects/high-tech-office/1.png",
    "/img/projects/high-tech-office/2.png",
    "/img/projects/high-tech-office/3.png",
    "/img/projects/high-tech-office/4.png",
  ];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <ProjectPageLayout
      title={t("High-tech office")}
      city={t("Yekaterinburg")}
      year={"2021"}
      description={[t("hightech-description")]}
      images={images}
      activeImage={activeImage}
      setActiveImage={() => setActiveImage(null)}
      type={"public"}
    >
      <ProjectPageRow style={{ gap: mobile ? "2.5vw" : "none" }}>
        <div className="project-page-layout__row-left">
          <div
            className="project-page-layout__double"
            style={{ alignItems: "flex-start" }}
          >
            <img
              className="project-page-layout__img"
              src={images[1]}
              alt=""
              style={{ marginTop: !mobile ? "-13.698vw" : "57vw" }}
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
        <div className="project-page-layout__row-right"></div>
      </ProjectPageRow>

      <ProjectPageRow
        style={{
          marginTop: mobile ? "0" : "0vw",
          gap: mobile ? "2.5vw" : "none",
        }}
      >
        <div className="project-page-layout__row-left">
          <img
            className="project-page-layout__img"
            src={images[3]}
            alt=""
            style={{ marginTop: !mobile ? "12.76vw" : "0vw" }}
            onClick={() => setActiveImage(3)}
          />
        </div>
        <div className="project-page-layout__row-right">
          <div
            className="project-page-layout__double"
            style={{ alignItems: "flex-start", flexDirection: "row-reverse" }}
          >
            <img
              className="project-page-layout__img"
              src={images[4]}
              alt=""
              onClick={() => setActiveImage(4)}
            />
          </div>
        </div>
      </ProjectPageRow>
    </ProjectPageLayout>
  );
}
