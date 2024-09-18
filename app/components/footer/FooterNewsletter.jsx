"use client";

import subscribeUser from "@/app/actions/subscribeUser";
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
      Subscribe to Newsletter
    </Link>
  );
};

const NewsletterForm = () => {
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState({ email: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("loading");
    const res = await subscribeUser(data);
    if (res.error) {
      setError(res.error);
      return setLoading("errored");
    }
    return setLoading("done");
  };

  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-4">
        Subscribe to our newsletter
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-96">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          disabled={loading === "loading" || loading === "done"}
          placeholder="you@example.com"
          className="px-4 py-2 mb-4 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-75"
          required
        />
        <FormButton state={loading} />
        <span className="text-center mt-1">
          {loading === "done" && (
            <p className="mt-2 text-green-500">Thank you for subscribing!</p>
          )}
          {loading === "errored" && (
            <small className=" text-rose-800 w-full">{error}</small>
          )}
          {loading === "done" && (
            <small className=" text-green-500">
              {data.email} subscribed successfully
            </small>
          )}
        </span>
      </form>
    </div>
  );
};

export default NewsletterForm;
