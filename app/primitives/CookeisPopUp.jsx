"use client";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

const CookieConsentNotice = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    console.log("Cookies accepted");
    setIsOpen(false);
  };

  const handleReject = () => {
    console.log("Cookies rejected");
    setIsOpen(false);
  };

  const handleLearnMore = () => {
    console.log("Learn more clicked");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-blue-500 p-6 shadow-lg">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <FiAlertCircle className="text-blue-500 flex-shrink-0" size={36} />
          <p className="text-lg text-gray-700 leading-relaxed">
            We and selected third parties use cookies or similar technologies
            for technical purposes and, with your consent, for other purposes as
            specified in the cookie policy.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <button
            onClick={handleLearnMore}
            className="text-lg text-blue-600 hover:underline"
          >
            Learn more and customize
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-3 text-lg text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentNotice;
