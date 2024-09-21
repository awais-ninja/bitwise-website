import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages/index.js";
import {
  WebServicesHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { startupProvideData } from "@/app/data/startup/StartUpProvideData";

const Page = () => {
  return (
    <div className="min-h-screen">
      <StartUpServicesHero data={WebServicesHeroData} />
      <StartUpWhyUs data={StartUpWhyUsData} />
      <StartUpProvideYou data={startupProvideData} />
      <StartUpImpact />
    </div>
  );
};

export default Page;
