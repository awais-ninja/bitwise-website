"use client";

import { useState, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import useLocalStorage from "../hooks/useLocalStorage";
import { sendGTMEvent } from "@next/third-parties/google";

const CookieConsentNotice = () => {
  const [consent, setConsent] = useLocalStorage("consent", null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAccept = () => {
    setConsent("granted");
    sendGTMEvent("consent-mode", "buttonClicked", { value: "granted" });
  };

  const handleReject = () => {
    setConsent("denied");
    sendGTMEvent("consent-mode", "buttonClicked", { value: "denied" });
  };

  if (!isClient || consent !== null) {
    return null;
  }

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
