import Link from "@/app/primitives/Link";
import React from "react";
import StatItem from "./StatsItem";

const Title = () => (
  <>
    <h1 className="text-3xl font-bold text-center  mb-4 ">
      We Always Strive to Exceed{" "}
      <span className="text-primary">Your Expectations</span>
    </h1>
    <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
  </>
);

const Description = () => (
  <p className="text-center text-black mb-8">
    At BitWise, we focus on understanding our client&apos;s goals and delivering
    solutions that meet and surpass expectations. With a client-first mindset,
    we ensure every project is customized to suit your specific needs and
    deliver outstanding results.
  </p>
);

const Stats = () => (
  <div className="flex flex-col md:grid md:grid-cols-4 gap-4 mb-8">
    <StatItem label="Clients Served" value="220" />
    <StatItem label="Projects Completed" value="300" />
    <StatItem label="Global Clients" value="250" />
    <StatItem label="Industry Experience" value="14" />
  </div>
);

const ContactSection = () => (
  <div className="bg-slate-200 shadow-md rounded-lg p-6 text-center">
    <h2 className="text-xl text-primary font-semibold mb-4">
      Have any questions about us?
    </h2>
    <p className="text-black mb-4">
      We&apos;re here to help! Contact us to learn more about how BitWise can
      elevate your digital presence and drive growth for your business.
    </p>
    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-black transition-colors">
      <Link href="/"> Get in Touch</Link>
    </button>
  </div>
);

const ResponsiveStatsComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Title />
      <Description />
      <Stats />
      <ContactSection />
    </div>
  );
};

export default ResponsiveStatsComponent;
