import { useEffect, useState } from "react";

const useAction = async (action, data) => {
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  let res = null;
  try {
    setLoading("loading");
    const q = await action(data);
    res = q;
    setLoading("done");
  } catch (error) {
    setError(error.message);
    setLoading("errored");
  }
  return { loading, res, err: error };
};

export default useAction;
