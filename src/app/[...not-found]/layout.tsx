// app/layout.jsx
import "../globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Page not found",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
