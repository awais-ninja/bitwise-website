import Link from "@/app/primitives/Link";

const EngagementCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  bgColor,
  textColor,
  height,
  width,
}) => (
  <div
    className={`cursor-pointer ${bgColor} ${textColor} p-6 rounded-lg shadow-md ${height} ${width}`}
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="mb-4">{description}</p>
    <Link
      href={buttonLink}
      className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
    >
      {buttonText}
    </Link>
  </div>
);

const StartUpSolutions = () => {
  return (
    <section className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-4 font-medium">
          How We Make It Happen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex items-center justify-center">
            <EngagementCard
              title="Rapid Solutions"
              description="Our team delivers quick and effective solutions to meet your immediate needs. From problem-solving to project execution, we get things done swiftly."
              buttonText="Learn More"
              buttonLink="https://calendly.com/awais-brainloggers/30min"
              bgColor="bg-black"
              textColor="text-white"
              height="h-60"
            />
          </div>

          <div className="lg:col-span-2 space-y-8 ml-16 mx-auto">
            <EngagementCard
              title="Dedicated Support"
              description="We provide focused support tailored to your business. Whether it's strategic advice or hands-on help, we're here to assist you every step of the way."
              buttonText="Get Support"
              buttonLink="https://calendly.com/awais-brainloggers/30min"
              bgColor="bg-gray-100"
              textColor="text-gray-800"
              height="h-30"
            />
            <EngagementCard
              title="Flexible Team"
              description="Need specialized skills for a short time? Our flexible team adapts to your project needs, offering expert talent exactly when you need it."
              buttonText="Hire Experts"
              buttonLink="https://calendly.com/awais-brainloggers/30min"
              bgColor="bg-white"
              textColor="text-gray-800"
              height="h-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUpSolutions;
