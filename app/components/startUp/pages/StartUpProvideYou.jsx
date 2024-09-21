"use client";
import { useState } from "react";

const StartUpProvideYou = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const toggleVisibility = () => {
    setVisibleCount(visibleCount === 9 ? data.length : 9);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Essential Things for Startups, We Can Help You with That!
        </h2>
        <p className="font-md text-center text-black mb-6">
          Starting a new business can be challenging, but with the right support
          and resources, you can establish a solid foundation for success. Here
          are the key essentials every startup should consider, and we can
          definitely help you with them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-75 cursor-pointer"
            >
              <div className="flex justify-center text-primary items-center mb-4 text-4xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                {item.title}
              </h3>
              <p className="text-black text-center">{item.description}</p>
            </div>
          ))}
        </div>
        {data.length > 9 && (
          <div className="text-center mt-6">
            <button
              onClick={toggleVisibility}
              className="bg-primary text-white py-2 px-4 rounded focus:outline-none transition duration-300 hover:bg-opacity-80"
            >
              {visibleCount === data.length ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartUpProvideYou;
