import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import { SocialHeroData, StartUpWhyUsData } from "@/app/data/startup/pagesData";
import { socialMediaServicesData } from "@/app/data/startup/ServicesDataMore";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={SocialHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={socialMediaServicesData} />
    <StartUpImpact />
  </div>
);

export default page;
