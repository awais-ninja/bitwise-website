import inovationData from "@/app/data/services/inovationData";

const StandOut = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Why Bitwise Stands Out
        </h2>
        <p className="max-w-2xl mx-auto text-black mb-8">
          Discover what makes Bitwise a preferred partner for your digital
          transformation. Our unique approach ensures we deliver exceptional
          value and results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inovationData.map((service, index) => (
            <div
              key={index}
              className="bg-slate-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:rotate-3 hover:scale-105"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-bold text-xl text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandOut;
