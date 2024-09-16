import Image from "next/image";
import BG from "@/app/static/hero/hero-bg.webp";

const HeroBG = () => {
  return (
    <Image
      src={BG}
      alt="Background Image for Wyze Tech Home Page hero section"
      priority
      quality={85}
      sizes="100vw"
      fill
      role="presentation"
      aria-hidden="true"
      style={{ objectFit: "cover", objectPosition: "center" }}
      className="absolute inset-0 opacity-20 select-none pointer-events-none"
    />
  );
};

export default HeroBG;
