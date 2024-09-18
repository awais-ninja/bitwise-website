import ServicesData from "@/app/data/startup/ServicesData";
import Link from "@/app/primitives/Link";

const ServiceCard = ({ icon, title, description, cta, link }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-xl">
    <div className="text-primary mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-center text-primary">{title}</h3>
    <p className="text-md text-black text-center">{description}</p>
    <Link
      href={link}
      className="inline-block py-1 px-6 text-black   font-semibold rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300 mt-4 mb-0 "
    >
      {cta}
    </Link>
  </div>
);
const StartUpServices = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">
          Our specialized services for <br />
          <span className="font-bold text-primary">
            startups and small businesses
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartUpServices;
