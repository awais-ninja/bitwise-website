import Link from "@/app/primitives/Link";

const ContactHeroSection = () => (
  <section className="bg-primary text-white py-16 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Elevate Your Business with Expert Digital Marketing & Web Solutions from
        Wyze Tech
      </h1>
      <p className="text-lg md:text-xl mb-6">
        At Wyze Tech, we specialize in providing top-tier digital marketing and
        web development services to help your business grow and succeed. Our
        team offers tailored solutions, including SEO optimization, content
        marketing, and custom web design, to meet your unique needs.
      </p>
      <p className="text-lg md:text-xl mb-6">
        With our expertise in digital strategy and exceptional customer service,
        we are committed to delivering measurable results and driving your
        business forward. Discover how our bespoke strategies can enhance your
        online presence and achieve your business objectives.
      </p>
      <Link
        href="/contact"
        className="bg-white text-primary py-2 px-6 rounded-md font-semibold hover:bg-black hover:text-white"
      >
        Contact Us for a Free Consultation
      </Link>
    </div>
  </section>
);

export default ContactHeroSection;
