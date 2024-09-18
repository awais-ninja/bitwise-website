import React from "react";
import allServices from "../data/services/allServices";
import HeroSectionServices from "../components/services/HeroSectionServices";
import { ReadyToStart } from "../components/aboutPage";
import AllServiceSection from "../components/services/AllServiceSection";

export const metadata = {
  title: "Services",
};

const Page = () => {
  return (
    <>
      <HeroSectionServices />
      {allServices.map((service) => (
        <AllServiceSection key={service.title} service={service} />
      ))}
      <ReadyToStart />
    </>
  );
};

export default Page;
