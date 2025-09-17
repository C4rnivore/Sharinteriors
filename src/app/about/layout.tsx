// app/layout.jsx
import "../globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Sharinterior | About",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
