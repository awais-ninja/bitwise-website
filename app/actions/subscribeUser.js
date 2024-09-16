"use server";

import client from "../utils/supabase";

const subscribeUser = async (formData) => {
  const { email } = formData;
  const table = "form_submissions";

  try {
    const exists = await client.from(table).select("email").eq("email", email);

    if (exists.error) {
      throw new Error(exists.data.error);
    }
    if (exists.data.length > 0) {
      return { error: "Email already subscribed" };
    }

    const insert = await client
      .from(table)
      .insert({ email: email })
      .select("email");
    if (insert.error) {
      throw new Error(insert.data.error);
    }

    return { data: insert.data[0] };
  } catch (error) {
    return { error: error.message };
  }
};

export default subscribeUser;
