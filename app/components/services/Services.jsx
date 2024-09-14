import React from "react";

import ServicesCard from "./ServicesCard";
import servicesData from "@/app/data/services/servicesData";

const ServicesShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-5 text-center">
        <span className="text-primary">Services</span> We Offers
      </h2>
      <p className="text-black mb-8 text-center">
        Discover our range of services designed to boost your online presence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
      <p className="text-black mx-auto mt-8 text-center">
        Transforming visions into digital reality. We craft responsive designs
        and develop cutting-edge web and mobile solutions, ensuring your online
        presence stands out. Elevate your brand with our expert design and
        development services.
      </p>
    </div>
  );
};

export default ServicesShowcase;
