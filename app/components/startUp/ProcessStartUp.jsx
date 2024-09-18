import stepsData from "@/app/data/startup/StepsData";

const ProcessStep = ({ number, title, description, color }) => (
  <div
    className={`bg-white rounded-lg p-6 relative shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
  >
    <div className={"text-primary text-5xl font-bold mb-4"}>
      {number.padStart(2, "0")}
      <span className="text-sm ml-1 text-primary/80">STEP</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-black">{description}</p>
    {number !== "6" && (
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl text-primary">
        ➜
      </div>
    )}
  </div>
);

const ProcessStartUp = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-4 font-medium">
          Steps in which We Help <br />
          <span className="text-primary font-bold ">
            Startups and New Businesses
          </span>
        </h2>
        <p className="text-black font-semibold text-center mb-12">
          OUR PROCESS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStartUp;
