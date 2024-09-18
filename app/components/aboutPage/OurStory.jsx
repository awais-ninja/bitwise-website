import React from "react";
import Image from "next/image";

import aboutData from "@/app/data/about/aboutData";

const OurStory = () => (
  <section className="py-16 px-4 bg-secondary">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
        Our Journey
      </h2>
      <div className="relative flex flex-col gap-12 md:gap-16">
        {aboutData.map((point, index) => (
          <div
            key={point.key}
            className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="relative md:w-1/2 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={point.imageUrl}
                alt={point.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
                width={700}
                height={500}
                quality={85}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            </div>
            <div className="md:w-1/2 px-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {point.title}
              </h3>
              <p className="text-black text-base md:text-lg leading-relaxed">
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
