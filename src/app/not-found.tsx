"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // Initialize i18n

import all from "@/assets/404/all.svg";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useEffect } from "react";

function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Page not found";
  }, [t]);

  return (
    <>
      <Header />
      <section className="nf-page">
        <div className="nf-page-wrapper">
          <Image src={all} width={100} height={100} alt="" />
          <span className="nf-text">{t("404-msg")}</span>
          <Link href="/">
            <span>{t("404-anchor")}</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
