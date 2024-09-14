import Link from "@/app/primitives/Link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const FooterContact = () => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Contact Information
      </h3>
      <div className="text-center md:text-left">
        <div className="flex items-center mb-2">
          <FaWhatsapp className="text-primary mr-2" />
          <Link
            href="https://wa.me/447391157590"
            className="text-black hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>WhatsApp:</strong> +44 73 9115 7590
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaWhatsapp className="text-primary mr-2" />
          <Link
            href="https://wa.me/923049978288"
            className="text-black hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>WhatsApp:</strong> +92 304 9978 288
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="text-primary mr-2" />
          <Link href="tel:+923049978288" className="text-black hover:underline">
            <strong>Landline:</strong> +92 304 9978 288
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="text-primary mr-2" />
          <Link href="tel:+442039954105" className="text-black hover:underline">
            <strong>Phone:</strong> +44 20 3995 4105
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-primary mr-2" />
          <Link
            href="mailto:awais.brainloggers@gmail.com"
            className="text-black hover:underline"
          >
            <strong>Email:</strong> awais.brainloggers@gmail.com
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-primary mr-2" />
          <Link
            href="mailto:info@brainloggers.co.uk"
            className="text-black hover:underline"
          >
            <strong>Email:</strong> info@brainloggers.co.uk
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-primary mr-2" />
          <Link
            href="https://www.google.com/maps?q=2+Sanders+Parade,+Greyhound+Lane,+Streatham,+London,+SW16+5NL+United+Kingdom"
            className="text-black hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Address:</strong> 2 - Sanders Parade, Greyhound Lane,
            Streatham, London, SW16 5NL United Kingdom
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
