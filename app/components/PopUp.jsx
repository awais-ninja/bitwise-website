"use client";

import { useState, useEffect } from "react";
import Link from "@/app/primitives/Link";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupShownCount =
      parseInt(localStorage.getItem("popupShownCount"), 10) || 0;

    if (popupShownCount < 3) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("popupShownCount", popupShownCount + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl max-w-full md:max-w-3xl relative mx-4 sm:max-w-sm sm:p-3">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-primary text-center">
              Free Consultation
            </h1>
            <p className="mb-3 md:mb-4 text-gray-800 text-sm md:text-lg leading-relaxed text-center">
              Let <strong>Wyze Tech</strong> help you grow your business with a{" "}
              <strong>Free Consultation</strong> on Digital Marketing, Web
              Development, and more.
            </p>
            <ul className="list-disc list-inside mb-4 md:mb-6 mx-auto text-gray-800 space-y-1 md:space-y-2 max-w-lg text-sm md:text-base">
              <li>Personalized advice for your business needs</li>
              <li>Expert recommendations from industry pros</li>
              <li>No obligation, just valuable insights</li>
              <li>Detailed analysis for SEO, social media, and more</li>
            </ul>
            <p className="mb-4 md:mb-6 text-gray-800 text-sm md:text-lg text-center">
              Click below to book your consultation.
            </p>
            <Link
              href="https://calendly.com/awais-brainloggers/30min"
              className="block w-full bg-primary text-white py-2 md:py-3 px-4 rounded-lg text-center text-sm md:text-lg hover:bg-primary-dark"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
