"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct form data
    const formData = new FormData();
    formData.append("entry.1568655537", email); // Replace with your actual field ID

    try {
      // Post data to Google Forms
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdrTUYm0qyA_J6RAFhhTqc92UMzvBhGQ35z6yB35jLss8on2g/formResponse", // Correct URL
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-4">
        Subscribe to our newsletter
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-96">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="px-4 py-2 mb-4 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          Subscribe
        </button>
        {submitted && (
          <p className="mt-2 text-green-500">Thank you for subscribing!</p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;
