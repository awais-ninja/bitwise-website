import Link from "@/app/primitives/Link";

const page = () => (
  <section className="bg-primary text-white py-20 px-4">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Email Campaign Management
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Drive engagement and growth with strategic email marketing campaigns
        designed to convert leads into loyal customers.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-white text-primary py-3 px-8 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default page;
