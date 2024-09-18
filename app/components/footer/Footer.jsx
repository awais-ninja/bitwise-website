import React from "react";
import Logo from "@/app/primitives/Logo";
import footerData from "@/app/data/footer/footerData";
import FooterSection from "./FooterSection";
import FooterContact from "./FooterContact";
import NewsletterForm from "./FooterNewsletter";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-12 md:flex-nowrap">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Logo />
            <p className="text-black mt-4">
              Wyze Tech Web Devs and IT Solutions delivers expert web
              development, graphic design, and IT services to enhance your
              business growth and online presence.
            </p>
          </div>

          {footerData.map((section, index) => (
            <FooterSection
              key={section.key}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-between items-start gap-12">
          <NewsletterForm />
          <FooterContact />
        </div>

        <div className="mt-12 pt-8 border-t-2 border-primary text-center">
          <p className="text-black">
            {currentYear} &#174; Wyze Tech Web Devs and IT Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
