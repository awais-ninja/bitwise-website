import Link from "next/link";
import Image from "next/image";

import BrandLogo from "@/app/static/brand/wyze-tech.svg";

const Logo = () => (
  <Link href="/" className="flex items-center" aria-label="Home">
    <Image
      src={BrandLogo}
      width={220}
      height={50}
      alt="Wyze-tech Logo"
      priority
      sizes="(max-width: 768px) 150px, 220px"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "220px",
      }}
    />
  </Link>
);

export default Logo;
