import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import { CloudHeroData, StartUpWhyUsData } from "@/app/data/startup/pagesData";
import { cloudServicesData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={CloudHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={cloudServicesData} />
    <StartUpImpact />
  </div>
);

export default page;
