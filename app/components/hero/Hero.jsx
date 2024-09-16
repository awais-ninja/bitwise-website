import React from "react";
import HeroBG from "./HeroBG";
import ExampleComponent from "./Writing";
import HeroForm from "./HeroForm";
import Link from "@/app/primitives/Link";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white">
      <HeroBG />
      <div className="relative container mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between lg:py-24">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl uppercase mb-4 lg:text-5xl lg:mb-6">
            Take Your Business to the Next Level with <br />
            <ExampleComponent />
          </h1>
          <p className="text-lg mb-6 lg:text-xl lg:mb-8">
            Harness the Power of SEO, Social Media, eCommerce, and Cutting-Edge
            Web Solutions to Maximize Your ROI.
          </p>

          <Link
            href="https://calendly.com/awais-brainloggers/30min"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-2/5 lg:pl-8 text-primary">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
