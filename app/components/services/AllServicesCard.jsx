const AllServicesCard = ({ title, description }) => (
  <div className=" overflow-hidden  transition duration-300 ease-in-out ">
    <div className="bg-primary text-white py-1 px-4 rounded ">
      <h3 className="text-lg font-semibold ">{title}</h3>
    </div>
    <div className="p-4">
      <p className="text-black ">{description}</p>
    </div>
  </div>
);

export default AllServicesCard;
