import Link from "@/app/primitives/Link";

const MissionValues = () => (
  <section className="bg-gray-100 py-12 px-4">
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Why Choose Wyze Tech?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Driving Digital Success with Innovation & Expertise.
          </h2>
          <p className="text-black text-base md:text-lg mb-6">
            Wyze Tech is your strategic partner in navigating the digital
            landscape. Our customized solutions are designed to maximize your
            business&apos;s potential through cutting-edge web development, SEO
            optimization, and targeted digital marketing strategies that deliver
            measurable results.
          </p>
        </div>

        <div className="md:w-1/3 mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">
            What Sets Wyze Tech Apart?
          </h2>
          <ul className="list-disc list-inside text-black text-base md:text-lg mb-6 ">
            <li className="hover:text-primary cursor-pointer">
              Digital Solutions for Every Business
            </li>
            <li className="hover:text-primary cursor-pointer">
              Expertise in SEO & Web Development
            </li>
            <li className="hover:text-primary cursor-pointer">
              Services for Business Growth
            </li>
            <li className="hover:text-primary cursor-pointer">
              Reliable Client Support & Consultation
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-black cursor-pointer"
          >
            Let&apos;s Boost Your ROI →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default MissionValues;
