const HeroForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-black">Leave Us a Message!</h2>
      <p className="text-sm mb-6 text-black">
        Our team is here to answer your questions about Bitwise Web and Graphic
        Designer | IT Experts and how we can enhance your digital presence.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Full Name</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Email</h2>
        <input
          type="email"
          placeholder="example@email.com"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Message</h2>
        <textarea
          placeholder="I want to discuss ..."
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-black transition-transform duration-300 hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default HeroForm;
