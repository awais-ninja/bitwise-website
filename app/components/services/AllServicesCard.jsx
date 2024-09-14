import "animate.css";

const AllServicesCard = ({ title, description }) => (
  <div className="bg-slate-200 shadow-md rounded-lg overflow-hidden hover:bg-primary transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-0.2s">
    <div className="bg-primary text-white py-1 px-4 hover:bg-slate-200 hover:text-primary">
      <h3 className="text-lg font-semibold animate__animated animate__fadeIn animate__delay-0.4s">
        {title}
      </h3>
    </div>
    <div className="p-4">
      <p className="text-black hover:text-white transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-0.6s">
        {description}
      </p>
    </div>
  </div>
);

export default AllServicesCard;
