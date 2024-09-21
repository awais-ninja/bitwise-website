import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import { StartUpWhyUsData, TechHeroData } from "@/app/data/startup/pagesData";
import { techSupportSolutionsData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={TechHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={techSupportSolutionsData} />
    <StartUpImpact />
  </div>
);

export default page;
