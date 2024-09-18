"use client";

import submitContactFrom from "@/app/actions/submitContact";
import Link from "@/app/primitives/Link";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

const FormButton = ({ state }) => {
  if (state === "loading")
    return (
      <Link
        className="w-full bg-yellow-300 text-black py-3 rounded-lg flex items-center gap-x-2 justify-center"
        disabled={true}
      >
        <span>Sending</span>
        <span>
          <LoadingSpinner />
        </span>
      </Link>
    );
  if (state === "errored")
    return (
      <Link className="w-full bg-rose-800 text-white py-3 rounded-lg hover:bg-black transition-transform duration-300 hover:scale-105 disabled:opacity-75">
        Submit Again
      </Link>
    );
  if (state === "done")
    return (
      <Link
        className="w-full bg-green-500 text-white py-3 rounded-lg disabled:opacity-75"
        disabled={true}
      >
        Submitted
      </Link>
    );
  return (
    <Link
      type="submit"
      className="w-full bg-primary text-white py-3 rounded-lg hover:bg-black transition-transform duration-300 hover:scale-105"
    >
      Submit
    </Link>
  );
};

const HeroForm = () => {
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading("loading");

    if (Boolean(data.honeypot)) {
      return setLoading("done");
    }

    const res = await submitContactFrom(data);
    if (res.error) {
      setError(res.error);
      return setLoading("errored");
    }
    setLoading("done");
  };

  return (
    <form className="bg-white p-10 rounded-lg shadow-lg" onSubmit={submitForm}>
      <h2 className="text-lg font-bold mb-4 text-primary">
        Leave Us a Message!
      </h2>
      <p className="text-md mb-6 text-black">
        Our team is here to answer your questions about Wyze Tech Web Dev and IT
        Solutions and how we can enhance your digital presence with expert Web
        Development, Graphic Design, Digital Marketing, Email Marketing, and IT
        Solutions tailored for your business growth.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Full Name</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            name="fName"
            value={data.fName}
            onChange={onChange}
            disabled={loading === "done"}
            placeholder="First Name"
            className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black disabled:opacity-75"
          />
          <input
            type="text"
            name="lName"
            value={data.lName}
            onChange={onChange}
            disabled={loading === "done"}
            placeholder="Last Name"
            className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black disabled:opacity-75"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Email</h2>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
          disabled={loading === "done"}
          placeholder="example@email.com"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black disabled:opacity-75"
        />
      </div>
      <div className="hidden">
        <label htmlFor="honeypot">2 + 1 = ?</label>
        <input
          id="honeypot"
          value={data.honeypot}
          name="honeypot"
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Message</h2>
        <textarea
          placeholder="I want to discuss ..."
          name="message"
          value={data.message}
          onChange={onChange}
          disabled={loading === "done"}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg text-black disabled:opacity-75"
          rows="4"
        />
      </div>
      <FormButton
        state={loading}
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-black transition-transform duration-300 hover:scale-105 disabled:opacity-75"
      >
        Submit
      </FormButton>
      {error && <small className="text-rose-800 text-center">{error}</small>}
    </form>
  );
};

export default HeroForm;
