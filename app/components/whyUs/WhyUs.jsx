import whyUsData from "@/app/data/whyUs/whyUsData";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-5">Why Choose Us</h2>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-0.5 mx-auto bg-primary my-2"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg w-full h-auto text-center transition-transform duration-300 transform md:hover:scale-105 md:cursor-pointer overflow-auto"
            >
              {card.icon}
              <h3 className="text-lg text-black hover:text-primary font-semibold mb-2">
                {card.heading}
              </h3>
              <p className="text-sm text-black">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
