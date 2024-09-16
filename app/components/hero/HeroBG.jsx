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
      style={{ objectFit: "cover", objectPosition: "center" }}
      className="absolute inset-0 opacity-20"
    />
  );
};

export default HeroBG;
