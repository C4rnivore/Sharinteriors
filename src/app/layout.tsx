/* eslint-disable @next/next/no-img-element */
// app/layout.jsx
import "./globals.css";
import Footer from "@/components/layout/footer";
import Popup from "@/components/popup/popup";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Jost } from "next/font/google";
import Script from "next/script";

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
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104708841', 'ym');
            ym(104708841, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104708841"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {children}
        <Footer />
        <Toaster />
        <Popup />
      </body>
    </html>
  );
}
