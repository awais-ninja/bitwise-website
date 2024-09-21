import ProcessStartUp from "../components/startUp/ProcessStartUp";
import StartUpHero from "../components/startUp/StartUpHero";
import StartUpKickstart from "../components/startUp/StartUpKickstart";
import StartUpServices from "../components/startUp/StartUpServices";
import StartUpSolutions from "../components/startUp/StartUpSolutions";

export const metadata = {
  title: "For Startups",
};

const Page = () => {
  return (
    <>
      <StartUpHero />
      <ProcessStartUp />
      <StartUpServices />
      <StartUpSolutions />
      <StartUpKickstart />
    </>
  );
};

export default Page;
