import React from "react";
import pricingData from "@/app/data/about/pricingData";

const PricingPlan = () => (
  <section className="bg-secondary py-12 px-4">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        Our Pricing Plans
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {pricingData.map((plan, index) => (
          <div
            key={plan.key}
            className={`bg-white border border-gray-300 rounded-lg shadow-lg p-6 md:w-1/3 flex flex-col justify-between transition-transform duration-300 transform hover:scale-105 hover:rotate-3 hover:border-primary ${
              plan.title === "Intermediate Plan" ? "relative" : ""
            }`}
          >
            {plan.title === "Intermediate Plan" && (
              <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-semibold py-1 px-2 rounded-md">
                Most Chosen
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">
                {plan.price}
              </p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, i) => (
                  <li key={plan.key}>{feature}</li>
                ))}
              </ul>
            </div>
            <a
              href={`mailto:awais.brainloggers@gmail.com?subject=Interest in ${
                plan.title
              }&body=Hello,%0D%0A%0D%0AI am interested in the ${plan.title} (${
                plan.price
              }) plan. Below are the details:%0D%0A%0D%0A${plan.features.join(
                "%0D%0A"
              )}`}
              className="inline-block bg-primary text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 self-center"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPlan;
