import React from "react";
import Logo from "@/app/primitives/Logo";
import footerData from "@/app/data/footer/footerData";
import FooterSection from "./FooterSection";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Footer top section */}
        <div className="flex flex-wrap justify-between items-start gap-12 md:flex-nowrap">
          {/* Company info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Logo />
            <p className="text-black mt-4">
              BitWise is a tech company offering web development, graphic
              design, and IT solutions, dedicated to delivering innovative and
              tailored digital services for business growth.
            </p>
          </div>

          {/* Links sections in a row */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-between gap-8">
            {footerData.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <form className="flex flex-col w-full sm:w-96">
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 mb-4 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer bottom section */}
        <div className="mt-12 pt-8 border-t border-primary text-center">
          <p className="text-black">
            {currentYear} &#174; BitWise Web and Graphics | IT Experts. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
