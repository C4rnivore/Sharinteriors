// app/layout.jsx
import "./globals.css";
import Footer from "@/components/layout/footer";
import Popup from "@/components/popup/popup";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Sharinterior",
  description: "Sharinteriors - Interior Design Studio.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={jost.className}>
      <body>
        {children}
        <Footer />
        <Toaster />
        <Popup />
      </body>
    </html>
  );
}
