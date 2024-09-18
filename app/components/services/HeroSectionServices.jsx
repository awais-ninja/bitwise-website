import Image from "next/image";
import BGPage from "@/app/static/services/bg-services.webp";
import BGServices from "@/app/static/services/hero-image-services.webp";
import Link from "@/app/primitives/Link";

const HeroSectionServices = () => {
  return (
    <section className="relative py-16 md:py-24 flex items-center overflow-hidden">
      {/* Background Image (hidden on mobile) */}
      <div className="absolute inset-0 md:block h-full w-full bg-yellow-200 -z-[1]">
        <Image
          src={BGServices}
          alt="Background"
          className="object-cover w-full h-full"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      </div>

      {/* Mobile Background Gradient */}
      {/* <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0]"></div> */}

      <div className="relative z-10 container mx-auto px-6 md:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight  text-secondary md:text-primary">
              Elevate Your Business with Our Services
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-white">
              Innovative Solutions for Your Success
            </h2>
            <p className="text-base md:text-lg mb-8 text-white">
              Discover our tailored services to drive your business forward with
              cutting-edge technology and exceptional support.
            </p>
            <Link
              href="/contact"
              className="inline-block py-3 px-6 md:bg-primary bg-white text-primary hover:sm:text-white md:text-white font-semibold rounded-lg shadow-lg hover:bg-primary/55 md:hover:bg-black  transition-all duration-300"
            >
              Contact Now
            </Link>
          </div>

          {/* Right side: Image (hidden on mobile) */}
          <div className="hidden md:block w-full md:w-1/2 relative h-[500px]">
            <Image
              src={BGPage}
              alt="Our Services"
              className="rounded-lg shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionServices;
