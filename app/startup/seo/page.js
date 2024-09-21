import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import { SeoHeroData, StartUpWhyUsData } from "@/app/data/startup/pagesData";
import { seoAnalyticsServicesData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={SeoHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={seoAnalyticsServicesData} />
    <StartUpImpact />
  </div>
);

export default page;
