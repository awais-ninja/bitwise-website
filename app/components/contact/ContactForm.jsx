const ContactForm = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
        Send Us a Message
      </h2>
      <form
        action="/submit-form"
        method="POST"
        className="flex flex-col space-y-6 max-w-full  mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200"
      >
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
            required
          />
        </div>

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number (+44 444 444 44)"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email (Example@email.com)"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
          required
        />

        <textarea
          name="message"
          placeholder="Message (I want to ask ...)"
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
          rows="6"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-md shadow-lg hover:bg-black transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
