import Image from "next/image";
import BG from "@/app/static/hero/hero-bg.png";

const HeroBG = () => {
  return (
    <Image
      src={BG}
      alt="Background"
      fill
      style={{ objectFit: "cover" }}
      className="absolute inset-0 opacity-30"
    />
  );
};

export default HeroBG;
