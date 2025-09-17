"use client";
import BackBtn from "@/components/buttons/BackBtn";
import React from "react";
import ProjectsGrid from "@/components/routing/ProjectsGrid";
import { projectsData } from "@/app/appData";

export default function PrivateProjects() {
  return (
    <section className="grid-container">
      <BackBtn
        title={"projects"}
        desktopRoute={["projects", "private"]}
        destination={"/projects"}
      />
      <ProjectsGrid projectsData={projectsData.private} />
    </section>
  );
}
