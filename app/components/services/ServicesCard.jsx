import Link from "@/app/primitives/Link";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description, cta, href }) => (
  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md flex flex-col transition-transform duration-300 hover:rotate-3 hover:scale-100 hover:bg-slate-200">
    <Link href={href}>
      <Image
        src={icon}
        alt={title}
        className="w-full h-48 object-cover"
        width={400}
        height={300}
      />
      <div className="p-4 flex flex-col flex-grow text-center items-center ">
        <h3 className="text-2xl text-primary font-semibold mb-2">{title}</h3>
        <p className="text-black mb-4 flex-grow">{description}</p>
        <button className="bg-primary w-40 text-white px-2 py-2 rounded hover:bg-black transition-transform duration-300 hover:scale-105">
          {cta}
        </button>
      </div>
    </Link>
  </div>
);

export default ServiceCard;
