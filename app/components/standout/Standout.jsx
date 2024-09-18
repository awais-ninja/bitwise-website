import inovationData from "@/app/data/services/inovationData";

const StandOut = () => {
  return (
    <div className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Why We Stand Out
        </h2>
        <div className="w-40 h-0.5 rounded-lg mx-auto bg-primary mb-4"></div>
        <p className="max-w-6xl mx-auto text-black mb-8">
          Discover what differentiates Wyze Tech Web Devs and IT Solutions in
          the digital transformation landscape. Our innovative approach ensures
          unparalleled value and results by leveraging state-of-the-art
          technology, strategic digital marketing, and comprehensive IT
          solutions. We specialize in advanced web development, SEO
          optimization, and IT consulting to drive business growth and enhance
          your online presence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {inovationData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:rotate-3 hover:scale-105 cursor-pointer"
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
