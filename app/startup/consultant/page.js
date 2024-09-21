import {
  StartUpImpact,
  StartUpProvideYou,
  StartUpServicesHero,
  StartUpWhyUs,
} from "@/app/components/startUp/pages";
import {
  ConsultantHeroData,
  StartUpWhyUsData,
} from "@/app/data/startup/pagesData";
import { startupConsultantProvideData } from "@/app/data/startup/ServicesDataMore";

const page = () => (
  <div className="min-h-screen">
    <StartUpServicesHero data={ConsultantHeroData} />
    <StartUpWhyUs data={StartUpWhyUsData} />
    <StartUpProvideYou data={startupConsultantProvideData} />
    <StartUpImpact />
  </div>
);

export default page;
