"use client";
import { useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServiceSection = ({ service }) => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of visible items

  const handleLoadMore = () => {
    setVisibleItems((prev) =>
      prev === service.subServices.flatMap((sub) => sub.items).length
        ? 4
        : service.subServices.flatMap((sub) => sub.items).length
    );
  };

  const items = service.subServices.flatMap((subService) => subService.items);

  return (
    <div className="my-16 px-6 md:px-12 lg:px-24 bg-secondary  rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-black">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.slice(0, visibleItems).map((item) => (
          <div
            key={item.title}
            className="bg-accent p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105  "
          >
            <AllServicesCard
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={handleLoadMore}
          className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold mb-4"
        >
          {visibleItems === items.length ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default AllServiceSection;
