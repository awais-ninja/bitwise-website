import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import {
  SupportHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { customerSupportServicesData } from "@/app/data/startup/ServicesDataMore";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={SupportHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={customerSupportServicesData} />
    <StartUpImpact />
  </div>
);

export default page;
