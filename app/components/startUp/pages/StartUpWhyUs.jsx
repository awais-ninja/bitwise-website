const StartUpWhyUs = ({ data }) => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-75 cursor-pointer "
            >
              {/* Center the icon inside a flex container */}
              <div className="flex items-center justify-center mb-4">
                <div className="text-primary text-4xl">{item.icon}</div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                {item.title}
              </h3>
              <p className="text-black text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StartUpWhyUs;
