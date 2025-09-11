/* eslint-disable @next/next/no-img-element */
import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import "./InfiniteImageSlider.css";

interface InfiniteImageSliderProps {
  content: string[];
  startIndex: number;
  closeFunction: () => void;
}

function InfiniteImageSlider(props: InfiniteImageSliderProps) {
  const content = props.content;
  const startIndex = props.startIndex;
  const close = () => props.closeFunction();

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();
  const lastPart = content.slice(0, startIndex);
  const firstPart = content.slice(startIndex);
  const resContent = firstPart.concat(lastPart);
  const items: React.ReactNode[] = [];

  resContent.forEach((path) => {
    items.push(
      (
        <img
          src={path}
          className="slider-image"
          onDragStart={handleDragStart}
          alt="slider-content"
        />
      ) as React.ReactNode
    );
  });

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (e.target as HTMLElement).className === "image-slider" ||
      (e.target as HTMLElement).className ===
        "alice-carousel__stage-item __active __target"
    ) {
      close();
    }
  };

  return (
    <div className={"image-slider"} onClick={handleSliderClick}>
      <AliceCarousel infinite mouseTracking items={items} />
    </div>
  );
}

export default InfiniteImageSlider;
