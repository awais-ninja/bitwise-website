const MissionValues = () => (
  <section className="bg-gray-100 py-12 px-4">
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Why Choose Digi Sense?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Built on Trust. Driven by Innovation.
          </h2>
          <p className="text-black text-base md:text-lg mb-6">
            We go beyond just providing services; we become your strategic
            partner in achieving business success. Our commitment is to build
            lasting relationships and deliver customized solutions.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">
            What Sets Us Apart
          </h2>
          <ul className="list-disc list-inside text-black text-base md:text-lg mb-6 ">
            <li className="hover:text-primary">Tailored Solutions</li>
            <li className="hover:text-primary">Proven Expertise</li>
            <li className="hover:text-primary">Commitment to Quality</li>
            <li className="hover:text-primary">Unmatched Support</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-primary text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-black"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MissionValues;
