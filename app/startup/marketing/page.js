import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import {
  MarketingHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { emailCampaignSolutionsData } from "@/app/data/startup/StartUpProvideData";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={MarketingHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={emailCampaignSolutionsData} />
    <StartUpImpact />
  </div>
);

export default page;
