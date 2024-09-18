import Link from "@/app/primitives/Link";
import React from "react";
import StatItem from "./StatsItem";

const Title = () => (
  <>
    <h1 className="text-3xl font-bold text-center mb-4">
      We&apos;re Committed to{" "}
      <span className="text-primary">Exceeding Your Digital Goals</span>
    </h1>
    <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
  </>
);

const Description = () => (
  <p className="text-center text-black mb-8">
    At Wyze Tech Web Devs and IT Solutions, our mission is to fully understand
    your digital goals and deliver customized solutions that go beyond your
    expectations. With our focus on innovation and a client-centric approach, we
    tailor each project to enhance your online presence, drive growth, and
    achieve exceptional results.
  </p>
);

const Stats = () => (
  <div className="flex flex-col md:grid md:grid-cols-4 gap-4 mb-8">
    <StatItem label="Clients Served" value="150+" />
    <StatItem label="Projects Completed" value="220+" />
    <StatItem label="Global Clients" value="180+" />
    <StatItem label="Years of Industry Experience" value="36+" />
  </div>
);

const ContactSection = () => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-screen-xl mx-auto mb-4">
    <h2 className="text-xl text-primary font-semibold mb-4">
      Have Questions or Ready to Elevate Your Business?
    </h2>
    <p className="text-black mb-4">
      We&apos;re here to help you achieve your digital marketing, web
      development, and IT consulting goals. Contact Wyze Tech Web Devs and IT
      Solutions today to learn how our tailored strategies can enhance your
      online presence and drive meaningful growth.
    </p>
    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-black transition-colors">
      <Link href="/contact">Get in Touch</Link>
    </button>
  </div>
);

const ResponsiveStatsComponent = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <Title />
        <Description />
        <Stats />
      </div>
      <ContactSection />
    </>
  );
};

export default ResponsiveStatsComponent;
