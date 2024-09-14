"use client";
import React, { useState } from "react";
import AllServicesCard from "./AllServicesCard";
import "animate.css";

const AllServiceSection = ({ service }) => {
  const [visibleItems, setVisibleItems] = useState(5); // Number of visible items
  const [animation, setAnimation] = useState("");

  const handleLoadMore = () => {
    setAnimation("animate__bounceOut");
    setTimeout(() => {
      setVisibleItems((prev) =>
        prev === service.subServices.flatMap((sub) => sub.items).length
          ? 5
          : service.subServices.flatMap((sub) => sub.items).length
      );
      setAnimation("animate__bounceIn");
    }, 300); // Delay to allow the out animation to complete
  };

  const items = service.subServices.flatMap((subService) => subService.items);

  return (
    <div className="my-8 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-primary animate__animated animate__bounceIn">
          {service.title}
        </h2>
        <p className="text-black mt-4 animate__animated animate__fadeIn animate__delay-0.2s">
          {service.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {items.slice(0, visibleItems).map((item) => (
          <div key={item.title} className="w-full md:w-1/2 lg:w-1/5 p-4">
            <AllServicesCard
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleLoadMore}
          className={`bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300 ease-in-out animate__animated ${animation}`}
        >
          {visibleItems === items.length ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default AllServiceSection;
