"use client";
import { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="Go back to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-28 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      } z-50`}
    >
      <FaChevronCircleUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
