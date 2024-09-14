import Image from "next/image";

import PicOne from "@/app/static/services/seo.jpg";

const OurTeam = () => (
  <section className="bg-gray-100 py-12 px-4">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Meet Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Image
            src={PicOne}
            alt="Team Member"
            className="w-full h-48 object-cover rounded-full mb-4"
            width={100}
            height={100}
          />
          <h3 className="text-xl font-semibold text-primary mb-2">John Doe</h3>
          <p className="text-black">Lead Developer</p>
        </div>
      </div>
    </div>
  </section>
);

export default OurTeam;
