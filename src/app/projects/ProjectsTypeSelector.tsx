"use client";
import "./styles/ProjectsTypeSelector.css";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
// import BackBtn from "@/components/buttons/BackBtn";

function ProjectsTypeSelector() {
  const [prevPos, setPrevPos] = useState("p1");
  const [privateIndex, setPrivateIndex] = useState(0);
  const privateIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const privateCurrentIndexRef = useRef<number>(0);
  const privateFadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [privateFadeIndex, setPrivateFadeIndex] = useState(0);
  const [privateIsFading, setPrivateIsFading] = useState(false);
  const [publicIndex, setPublicIndex] = useState(0);
  const publicIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const publicCurrentIndexRef = useRef<number>(0);
  const publicFadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [publicFadeIndex, setPublicFadeIndex] = useState(0);
  const [publicIsFading, setPublicIsFading] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  const handlePGalleryMouseOver = (pos: string) => {
    const curr = document.getElementById(pos);
    const prev = document.getElementById(prevPos);

    prev?.classList.remove("projects-gallery-active");
    curr?.classList.add("projects-gallery-active");

    setPrevPos(pos);
  };

  const handlePGalleryMouseLeave = (pos: string) => {
    const curr = document.getElementById(pos);
    curr?.classList.remove("projects-gallery-active");
  };

  const startPrivateCycle = () => {
    if (privateIntervalRef.current) return;
    privateIntervalRef.current = setInterval(() => {
      const next = (privateCurrentIndexRef.current + 1) % privateImages.length;
      setPrivateFadeIndex(next);
      setPrivateIsFading(true);
      if (privateFadeTimeoutRef.current)
        clearTimeout(privateFadeTimeoutRef.current);
      privateFadeTimeoutRef.current = setTimeout(() => {
        setPrivateIndex(next);
        privateCurrentIndexRef.current = next;
        setPrivateIsFading(false);
      }, 600);
    }, 2500);
  };

  const stopPrivateCycle = () => {
    if (privateIntervalRef.current) {
      clearInterval(privateIntervalRef.current);
      privateIntervalRef.current = null;
    }
    if (privateFadeTimeoutRef.current) {
      clearTimeout(privateFadeTimeoutRef.current);
      privateFadeTimeoutRef.current = null;
    }
    setPrivateIndex(0);
    privateCurrentIndexRef.current = 0;
    setPrivateFadeIndex(0);
    setPrivateIsFading(false);
  };

  useEffect(() => {
    privateCurrentIndexRef.current = privateIndex;
  }, [privateIndex]);

  useEffect(() => {
    return () => {
      if (privateIntervalRef.current) {
        clearInterval(privateIntervalRef.current);
      }
      if (privateFadeTimeoutRef.current) {
        clearTimeout(privateFadeTimeoutRef.current);
      }
      if (publicIntervalRef.current) {
        clearInterval(publicIntervalRef.current);
      }
      if (publicFadeTimeoutRef.current) {
        clearTimeout(publicFadeTimeoutRef.current);
      }
    };
  }, []);

  const interactionHandler = (el: HTMLDivElement) => {
    el.addEventListener("mouseover", () => {
      handlePGalleryMouseOver(el.id);
    });
    el.addEventListener("mouseleave", () => {
      handlePGalleryMouseLeave(el.id);
    });
  };

  const privateImages = [
    "/img/projects/FusionInZamoskvorechyeHero.png",
    "/img/projects/WhiteAppartamentsHero.png",
    "/img/projects/LoftInGeorgiaHero.png",
    "/img/projects/MonochromeMinimalismHero.png",
    "/img/projects/ContemporaryComfortHero.png",
    "/img/projects/PolandHero.png",
  ];

  const publicImages = [
    "/img/projects/HighTechOfficeHero.png",
    "/img/projects/VintageCoffeeShopHero.png",
  ];

  const startPublicCycle = () => {
    if (publicIntervalRef.current) return;
    publicIntervalRef.current = setInterval(() => {
      const next = (publicCurrentIndexRef.current + 1) % publicImages.length;
      setPublicFadeIndex(next);
      setPublicIsFading(true);
      if (publicFadeTimeoutRef.current)
        clearTimeout(publicFadeTimeoutRef.current);
      publicFadeTimeoutRef.current = setTimeout(() => {
        setPublicIndex(next);
        publicCurrentIndexRef.current = next;
        setPublicIsFading(false);
      }, 600);
    }, 2500);
  };

  const stopPublicCycle = () => {
    if (publicIntervalRef.current) {
      clearInterval(publicIntervalRef.current);
      publicIntervalRef.current = null;
    }
    if (publicFadeTimeoutRef.current) {
      clearTimeout(publicFadeTimeoutRef.current);
      publicFadeTimeoutRef.current = null;
    }
    setPublicIndex(0);
    publicCurrentIndexRef.current = 0;
    setPublicFadeIndex(0);
    setPublicIsFading(false);
  };

  return (
    <div className="projects-gallery">
      {/* <BackBtn title={"home"} destination={"/"} desktopRoute={["home"]} /> */}
      <div className="projects-gallery-wrapper">
        <motion.div
          id="p1"
          onHoverStart={startPrivateCycle}
          onHoverEnd={stopPrivateCycle}
          ref={(el) => {
            if (el) interactionHandler(el);
          }}
          style={{
            backgroundImage: `url(${privateImages[privateIndex]})`,
            position: "relative",
            overflow: "hidden",
          }}
          className="projects-gallery-item"
          onClick={() => router.push("/projects/private")}
        >
          <span style={{ zIndex: 11 }}>{t("private")}</span>
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${privateImages[privateFadeIndex]})`,
              pointerEvents: "none",
            }}
            animate={{ opacity: privateIsFading ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          id="p2"
          onHoverStart={startPublicCycle}
          onHoverEnd={stopPublicCycle}
          ref={(el) => {
            if (el) interactionHandler(el);
          }}
          style={{
            backgroundImage: `url(${publicImages[publicIndex]})`,
            position: "relative",
            overflow: "hidden",
          }}
          className="projects-gallery-item"
          onClick={() => router.push("/projects/public")}
        >
          <span style={{ zIndex: 11 }}>{t("public")}</span>
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${publicImages[publicFadeIndex]})`,
              pointerEvents: "none",
            }}
            animate={{ opacity: publicIsFading ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsTypeSelector;
