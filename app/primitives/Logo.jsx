import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/app/static/brand/wyze-tech.svg";

const Logo = () => (
  <Link href="/" className="flex items-center" aria-label="Home">
    <Image
      src={BrandLogo}
      width={250}
      height={75}
      className="w-32 h-auto md:w-48 lg:w-44" // Set responsive width for different screens
      alt="Wyze-tech Logo"
      priority
    />
  </Link>
);

export default Logo;
