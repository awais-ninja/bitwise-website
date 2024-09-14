import Link from "@/app/primitives/Link";

const ReadyToStart = () => (
  <section className="py-12 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Let&apos;s Elevate Your Business Together
      </h2>
      <p className="text-black text-base md:text-lg mb-6">
        Ready to discuss your project? Our team is here to help you succeed with
        our tailored digital solutions.
      </p>
      <Link
        href="/contact"
        className="bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-black"
      >
        Contact Us
      </Link>
    </div>
  </section>
);

export default ReadyToStart;
