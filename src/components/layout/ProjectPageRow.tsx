import React from "react";
import "./css/ProjectPageLayout.css";

interface ProjectPageRowProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ProjectPageRow({
  children,
  style,
}: ProjectPageRowProps) {
  return (
    <div className="project-page-layout__row" style={style}>
      {children}
    </div>
  );
}
