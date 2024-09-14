import Link from "./Link";
import BrandLogo from "@/app/static/brand/bitwise-logo.svg";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center">
    <Link href="/">
      <Image src={BrandLogo} width={220} height={50} alt="Bitwise Logo" />
    </Link>
  </div>
);

export default Logo;
