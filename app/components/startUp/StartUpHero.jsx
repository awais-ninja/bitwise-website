import Link from "@/app/primitives/Link";
import Image from "next/image";
import React from "react";
import HeroBG from "@/app/static/startup/helping-hands.webp";

const StartUpHero = () => {
  return (
    <section className="relative text-white py-20 ">
      <div className="absolute inset-0">
        <Image
          src={HeroBG}
          alt="Hero background"
          fill
          className="object-cover hidden md:block"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] md:hidden"></div>
        <div className="absolute inset-0 bg-black opacity-80 "></div>
      </div>
      <div className="container mx-auto text-center px-4 relative z-10 max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Accelerate Your Startup&apos;s Growth with Our Exclusive Offers!
        </h1>
        <p className="text-xl mb-8">
          At Wyze Tech, we believe in building long-term relationships with
          startups and new businesses by delivering exceptional value from the
          start. To show our commitment, we&apos;re offering exclusive discounts
          and a FREE 40-hour Proof of Concept—a risk-free way for you to see
          firsthand what we can achieve together.
        </p>
        <Link
          href="https://calendly.com/awais-brainloggers/30min"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-black transition"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
};

export default StartUpHero;
