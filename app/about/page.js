import {
  AboutHeroSection,
  OurStory,
  MissionValues,
  ReadyToStart,
  PricingPlan,
} from "@/app/components/aboutPage/index";
import WhyChooseUs from "../components/whyUs/WhyUs";

export const metadata = {
  title: "About",
};

import ServicesShowcase from "../components/services/Services";

const AboutUsPage = () => (
  <div>
    <AboutHeroSection />
    <PricingPlan />
    <OurStory />
    <ServicesShowcase />
    <WhyChooseUs />
    <MissionValues />
    <ReadyToStart />
  </div>
);

export default AboutUsPage;
