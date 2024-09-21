import Link from "@/app/primitives/Link";

const StartUpServicesHero = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] px-4 py-16 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-2">{data.title}</h1>
      <p className="text-xl text-white mb-6">{data.subheading}</p>
      <p className="text-md text-white max-w-2xl mx-auto">{data.description}</p>
      <button className="mt-8 bg-white text-primary px-8 py-2 rounded-md  font-medium hover:bg-black hover:text-white transition duration-300 transform hover:scale-105">
        <Link href="/contact">{data.cta}</Link>
      </button>
    </section>
  );
};
export default StartUpServicesHero;
