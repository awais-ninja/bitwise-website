import Link from "@/app/primitives/Link";

const NavItem = ({ href, children }) => (
  <Link
    href={href}
    className="text-black hover:text-primary hover:font-bold transition-all duration-300"
  >
    {children}
  </Link>
);

export default NavItem;
