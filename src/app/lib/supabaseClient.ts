import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const userProfile = process.env.NEXT_PUBLIC_STORAGE_BUCKET as string;
const serviceRolKey = process.env.NEXT_PUBLIC_SERVICE_ROL_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const admin = createClient(supabaseUrl, serviceRolKey);
