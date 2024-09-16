import { createClient } from "@supabase/supabase-js";

const client = createClient(
  process.env.SUPABSE_DATABASE,
  process.env.SUPABASE_SECRET
);

export default client;
