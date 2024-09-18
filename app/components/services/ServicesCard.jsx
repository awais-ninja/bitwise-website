import React from "react";
import servicesData from "@/app/data/services/servicesData";
import Image from "next/image";
import Link from "@/app/primitives/Link";

const ServicesShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-secondary">
      <h2 className="text-4xl font-bold mb-5 text-center text-primary">
        Our Services
      </h2>
      <div className="w-40 h-0.5 rounded-lg mx-auto bg-primary mb-4"></div>
      <p className="text-black mb-8 w-auto text-center">
        Explore our comprehensive range of services designed to enhance your
        online visibility and drive success. From
        <strong> website design</strong> to <strong>email marketing</strong>,
        with complete <strong>IT Solutions,</strong> our solutions are tailored
        to meet your unique needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Link
            href={service.link}
            key={service.key}
            className="bg-white rounded-lg shadow-md overflow-hidden relative group"
          >
            <div className="relative w-full h-52">
              <Image
                src={service.icon}
                alt={service.title}
                quality={75}
                className="object-cover h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="text-white p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="mb-4">{service.description}</p>
                  <div className="bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-black cursor-pointer">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-black mx-auto mt-8 text-center">
        We specialize in <strong>responsive web design</strong>,{" "}
        <strong>advanced web development</strong>, and{" "}
        <strong>effective digital marketing strategies</strong>. Our expert team
        is dedicated to transforming your ideas into a powerful digital
        presence. Elevate your brand and achieve measurable results with our
        cutting-edge <strong>IT Solutions</strong>.
      </p>
    </div>
  );
};

export default ServicesShowcase;
