import Link from "@/app/primitives/Link";
import { FaUsers, FaChartLine, FaHandshake } from "react-icons/fa"; // New icons

const data = [
  {
    stat: "250%",
    desc: "Average increase in user engagement",
    icon: <FaChartLine className="mx-auto mb-4 text-white" size={48} />,
  },
  {
    stat: "100+",
    desc: "Satisfied clients across industries",
    icon: <FaUsers className="mx-auto mb-4 text-white" size={48} />,
  },
  {
    stat: "30%",
    desc: "Typical improvement in conversion rates",
    icon: <FaHandshake className="mx-auto mb-4 text-white" size={48} />,
  },
];

const StartUpImpact = () => {
  return (
    <section className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">The Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition duration-300 cursor-pointer"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.stat}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition duration-300 flex items-center mx-auto">
          <Link href="/contact">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default StartUpImpact;
