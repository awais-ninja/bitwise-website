import Logo from "../../primitives/Logo.jsx";
import navData from "../../data/navigation/NavData.js";
import MobileMenu from "./MobileMenu";

import NavItem from "./NavItems.jsx";
import Link from "@/app/primitives/Link.jsx";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navData.map((item) => (
              <NavItem href={item.href} key={item.id}>
                {item.title}
              </NavItem>
            ))}
          </div>
          <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md hover:bg-black transition-transform duration-300 hover:scale-105">
            <Link href="https://calendly.com/awais-brainloggers/30min">
              Book a Meeting{" "}
            </Link>
          </button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
