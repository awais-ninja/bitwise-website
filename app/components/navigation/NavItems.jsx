// NavItems.jsx

import Link from "@/app/primitives/Link";

const NavItem = (
  { href, children, className, onClick } // Accept onClick prop
) => (
  <Link
    href={href}
    className={`text-black hover:text-primary hover:font-bold transition-all duration-300 ${className}`}
    onClick={onClick} // Trigger onClick when link is clicked
  >
    {children}
  </Link>
);

export default NavItem;
