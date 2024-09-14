import Link from "@/app/primitives/Link";

const AboutHeroSection = () => (
  <section className="bg-primary text-white py-16 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        We do great things together
      </h1>
      <p className="text-lg md:text-xl mb-6">
        BitWise has risen to heights as a leading provider of digital marketing
        and e-commerce services. We serve a wide range of clients, from small
        companies to large enterprises.
      </p>
      <p className="text-lg md:text-xl mb-6">
        Our team of highly talented and experienced individuals has a thorough
        awareness of the ever-changing technical landscape, as well as an
        unchanging dedication to providing great customer service.
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

export default AboutHeroSection;
