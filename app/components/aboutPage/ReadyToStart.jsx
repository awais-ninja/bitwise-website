import Link from "@/app/primitives/Link";

const ReadyToStart = () => (
  <section className="py-12 px-4 text-center">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Let&apos;s Take Your Business to the Next Level
      </h2>
      <p className="text-black text-base md:text-lg mb-6">
        Ready to unlock your business&apos;s true potential? Wyze Tech is here
        to deliver tailored digital marketing, SEO, and web development
        solutions that drive real growth and success.
      </p>
      <Link
        href="/contact"
        className="bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-black"
      >
        Start Your Journey with Wyze Tech
      </Link>
    </div>
  </section>
);

export default ReadyToStart;
