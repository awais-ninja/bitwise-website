import ProcessStartUp from "../components/startUp/ProcessStartUp";
import StartUpHero from "../components/startUp/StartUpHero";
import StartUpServices from "../components/startUp/StartUpServices";
import StartUpSolutions from "../components/startUp/StartUpSolutions";

import Link from "@/app/primitives/Link";

export const metadata = {
  title: "For Startups",
};

const StartUpKickstart = () => (
  <section className="py-12 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Let&apos;s Kickstart Your Startup!
      </h2>
      <p className="text-black text-base md:text-lg mb-6">
        We&apos;re excited to partner with you on your journey to success. Our
        dedicated team is ready to collaborate with you, turning your ideas into
        impactful outcomes. Whether you need tailored solutions or flexible
        support, we&apos;re here to help you achieve your goals. Let&apos;s work
        together to bring your vision to life and drive your startup forward!
      </p>
      <Link
        href="https://calendly.com/awais-brainloggers/30min"
        className="bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-black"
      >
        Start Your Journey with Wyze Tech
      </Link>
    </div>
  </section>
);

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
