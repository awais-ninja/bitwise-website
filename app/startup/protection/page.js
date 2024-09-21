import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import {
  ProtectionHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { itSolutionsData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={ProtectionHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={itSolutionsData} />
    <StartUpImpact />
  </div>
);

export default page;
