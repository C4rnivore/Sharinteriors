"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./css/ProjectGrid.css";

interface ProjectGridData {
  title: string;
  image: string;
  path: string;
}

export default function ProjectsGrid({
  projectsData,
}: {
  projectsData: ProjectGridData[];
}) {
  const { t } = useTranslation();

  return (
    <div className="private-container">
      <div className="private-table">
        {projectsData.map((project, index) => (
          <Link
            key={index}
            href={project.path}
            className={
              index % 4 === 0 || index % 4 === 3
                ? "cell-image wide white"
                : "cell-image fusion"
            }
          >
            <span className="cell-title">{t(project.title)}</span>
            <img src={project.image} alt="" draggable="false" loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
}
