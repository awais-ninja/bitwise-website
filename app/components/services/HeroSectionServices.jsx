import Image from "next/image";
import BGServices from "@/app/static/services/bg-services.webp";

const HeroSectionServices = () => {
  return (
    <section className="relative min-h-min bg-cover bg-center">
      <Image
        src={BGServices}
        alt="Background Services"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-primary">Our Services</h1>
        <h2 className="text-2xl font-semibold mb-4">Delivering Excellence</h2>
        <p className="text-lg">
          Explore our range of services designed to help you achieve your
          business goals with precision and innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionServices;
