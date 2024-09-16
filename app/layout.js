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
import contactData from "./data/contact";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.wyze-tech.com"),
  title: {
    template: `%s | Wyze-Tech`,
    default: contactData.title,
  },
  description: contactData.description,
  keywords: [
    "Graphics Design",
    "Website Development",
    "Website Design",
    "IT Solutions",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Website Development in USA",
    "Website Development near me",
    "Website Development in UK",
    "Web developer",
  ],
  authors: [{ name: "Awais Ahmad", url: "https://www.wyze-tech.com" }],
  openGraph: {
    title: contactData.title,
    description: contactData.description,
    url: "https://www.wyze-tech.com",
    siteName: contactData.title,
    images: [
      {
        url: contactData.og,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactData.title,
    description: contactData.description,
    images: [contactData.og],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-VQ31N0WZS4" />
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
