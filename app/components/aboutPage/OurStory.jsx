import React from "react";
import Image from "next/image";

import aboutData from "@/app/data/about/aboutData";

const OurStory = () => (
  <section className="py-8 px-4 bg-gray-50">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        Our Journey
      </h2>
      <div className="flex flex-wrap gap-8">
        {aboutData.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-6  border border-primary rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}
          >
            <div className="md:w-1/2">
              <Image
                src={point.imageUrl}
                alt={point.title}
                className="w-full h-auto rounded-md transition-transform duration-300 transform hover:rotate-3"
                width={700}
                height={500}
                quality={85}
                priority={index === 0}
              />
            </div>
            <div className="md:w-1/2 px-4 md:pb-6 sm:pb-10 lg:pb-3 pb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-black text-base md:text-lg ">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurStory;
