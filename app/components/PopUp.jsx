"use client";

import { useState, useEffect } from "react";
import Link from "@/app/primitives/Link";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Retrieve the number of times the pop-up has been shown from localStorage
    const popupShownCount =
      parseInt(localStorage.getItem("popupShownCount"), 10) || 0;

    if (popupShownCount < 3) {
      // Set a timeout to show the pop-up after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Increment the counter and store it in localStorage
        localStorage.setItem("popupShownCount", popupShownCount + 1);
      }, 5000);

      // Clear timeout if the component is unmounted before the timer completes
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <div>
      {/* Pop-up Section */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-full md:max-w-3xl relative mx-4">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h1 className="text-3xl font-bold mb-4 text-primary text-center">
              Free Consultation for You
            </h1>
            <p className="mb-4 text-gray-800 text-lg leading-relaxed text-center">
              Ready to elevate your business but not sure where to start? At{" "}
              <strong>Wyze Tech</strong>, we provide a{" "}
              <strong>Free Consultation</strong> to reveal the secrets to
              unlocking your business&apos;s full potential.
            </p>
            <ul className="list-disc list-inside mb-6 mx-auto text-gray-800 space-y-2 max-w-lg">
              <li>
                <strong>Personalized Insights:</strong> Tailored advice for your
                unique business needs.
              </li>
              <li>
                <strong>Expert Recommendations:</strong> Benefit from our
                experienced professionals in Digital Marketing, Web Development,
                and IT Solutions.
              </li>
              <li>
                <strong>No Obligation:</strong> Experience our value without any
                pressure.
              </li>
              <li>
                <strong>Comprehensive Analysis:</strong> Get a detailed action
                plan for optimizing SEO, social media, and more.
              </li>
              <li>
                <strong>Innovative Strategies:</strong> Stay ahead with the
                latest trends and practices for 2024.
              </li>
            </ul>
            <p className="mb-6 text-gray-800 text-lg text-center">
              Getting started is easy! Click below to book your Free
              Consultation with Wyze Tech.
            </p>
            <Link
              href="https://calendly.com/awais-brainloggers/30min"
              className="block w-full bg-primary text-white py-3 px-6 rounded-lg text-center text-lg hover:bg-primary-dark"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
