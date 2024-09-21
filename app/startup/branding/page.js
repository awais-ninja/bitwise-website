import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import {
  BraindingHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { brandingSolutionsData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={BraindingHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={brandingSolutionsData} />
    <StartUpImpact />
  </div>
);

export default page;
