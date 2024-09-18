import Link from "@/app/primitives/Link";

const AboutHeroSection = () => (
  <section
    style={{ background: "linear-gradient(to right, #8E2DE2, #4A00E0)" }}
    className="text-white py-16 px-4 text-center"
  >
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Elevate Your Digital Presence with Us
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Wyze Tech Web Devs and IT Solutions excels in delivering cutting-edge
        digital marketing and e-commerce strategies. Our expertise spans across
        optimizing online visibility, enhancing user experience, and driving
        conversion growth for businesses of all sizes.
      </p>
      <p className="text-lg md:text-xl mb-6">
        Our dedicated team combines advanced technical knowledge with a
        commitment to exceptional customer support, ensuring your digital
        projects achieve maximum impact in today&apos;s dynamic market.
      </p>
      <Link
        href="/contact"
        className="bg-white text-primary py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-black hover:text-white"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default AboutHeroSection;
