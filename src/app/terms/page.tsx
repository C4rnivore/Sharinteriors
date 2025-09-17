/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslation } from "react-i18next";
import TermsRU from "@/components/terms/TermsRU";
import TermsEN from "@/components/terms/TermsEN";

function TermsPage() {
  const { t, i18n } = useTranslation();

  return (
    <section id="Terms">
      <h1 className="terms-title">{t("terms")}</h1>
      {i18n.language === "ru" ? <TermsRU /> : <TermsEN />}
    </section>
  );
}

export default TermsPage;
