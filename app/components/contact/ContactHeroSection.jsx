import Link from "@/app/primitives/Link";

const ContactHeroSection = () => (
  <section className="bg-primary text-white py-16 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Elevate Your Business with BITWISE
      </h1>
      <p className="text-lg md:text-xl mb-6">
        At BITWISE, we drive your success with innovative digital marketing and
        e-commerce solutions tailored to your business.
      </p>
      <p className="text-lg md:text-xl mb-6">
        Our expert team is committed to delivering outstanding results through
        personalized strategies and exceptional customer service.
      </p>
      <Link
        href="/contact"
        className="bg-white text-primary py-2 px-6 rounded-md font-semibold hover:bg-black hover:text-white"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default ContactHeroSection;
