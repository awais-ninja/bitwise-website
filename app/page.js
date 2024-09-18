import Hero from "./components/hero/Hero";
import ServicesSection from "./components/services/Services";
import StandOut from "./components/standout/Standout";
import ResponsiveStatsComponent from "./components/stats/Stats";
import WhyUs from "./components/whyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />

      <WhyUs />
      <ServicesSection />
      <StandOut />
      <ResponsiveStatsComponent />
    </>
  );
}
