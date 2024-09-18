import { Analytics } from "@vercel/analytics/react";

import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";
import BackToTop from "./primitives/BacktoTop";
import CookieConsentNotice from "./primitives/CookeisPopUp";
import contactData from "./data/contact";
import PopUp from "./components/PopUp";
import CrispProvider from "./providers/CrispProvider";
import Providers from "./providers";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  metadataBase:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : new URL(contactData.baseUrl),
  title: {
    default: contactData.title,
    template: `%s | ${contactData.title}`,
  },
  description: contactData.description,
  keywords: contactData.keywords,
  authors: contactData.authors,
  openGraph: {
    title: contactData.title,
    description: contactData.description,
    url: contactData.baseUrl,
    siteName: contactData.title,
    images: [
      {
        url: contactData.ogImage.src,
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
      <body className={roboto.className}>
        <Providers crispSiteId={process.env.CRISP_SITE_ID}>
          <Navbar />
          {children}
          <BackToTop />
          <Footer />
          <CookieConsentNotice />
          <PopUp />
        </Providers>
      </body>
    </html>
  );
}
