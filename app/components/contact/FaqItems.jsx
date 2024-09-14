"use client";
import { useState } from "react";
const { FaChevronCircleUp, FaChevronCircleDown } = require("react-icons/fa");

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 w-full md:w-4/5 lg:w-2/3 px-4 mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex justify-between items-center border border-gray-200"
      >
        <span className="font-semibold text-lg text-gray-900">{question}</span>
        {isOpen ? (
          <FaChevronCircleUp className="w-6 h-6 text-primary" />
        ) : (
          <FaChevronCircleDown className="w-6 h-6 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-all duration-300 ease-in-out">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
