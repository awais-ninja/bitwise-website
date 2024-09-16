import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";
import BackToTop from "./primitives/BacktoTop";
import CookieConsentNotice from "./primitives/CookeisPopUp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Wyze Tech | Web Dev and IT Solutions",
  description:
    "Wyze Tech offers expert web design, graphic design, and IT solutions. Our services include custom website development, creative graphics, and reliable IT support to elevate your digital presence. Experience top-quality results and exceptional service with Wyze Tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-CRP5WEVWCS" />
      <body className={poppins.className}>
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
        <SpeedInsights />
        <Analytics />
        <CookieConsentNotice />
      </body>
    </html>
  );
}
