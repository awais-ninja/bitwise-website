"use client";

import { useState } from "react";
import Logo from "../../primitives/Logo.jsx";
import Link from "../../primitives/Link.jsx";
import navData from "../../data/navigation/NavData.js";
import NavItem from "./NavItems.jsx"; // Import NavItem correctly
import {
  FaFacebook,
  PiInstagramLogoFill,
  RxCross1,
  IoMdMenu,
} from "../../data/navigation/icons.js";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <button className="md:hidden" onClick={toggleMenu}>
        <IoMdMenu className="h-6 w-6 text-primary" />
      </button>

      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Logo />
            <button onClick={toggleMenu}>
              <RxCross1 className="h-6 w-6 text-gray-600 hover:text-primary transition-colors duration-300" />
            </button>
          </div>
          <div className="flex flex-col flex-grow p-4 space-y-2">
            {navData.map((item) => (
              <NavItem href={item.href} key={item.id} onClick={toggleMenu}>
                {" "}
                {/* Pass toggleMenu */}
                {item.title}
              </NavItem>
            ))}
          </div>
          <div className="p-4 mb-48">
            <button className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-black transition-transform duration-300 hover:scale-105 ">
              Book a Meeting
            </button>
            <div className="flex justify-center space-x-6 mt-4">
              <Link
                href="https://www.facebook.com/MirzaAwais420"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </Link>
              <Link
                href="https://www.instagram.com/mirza.awais.official/"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <PiInstagramLogoFill size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
