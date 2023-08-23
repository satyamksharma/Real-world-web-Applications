import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oxjsltpyeodateohtyia.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94anNsdHB5ZW9kYXRlb2h0eWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1Mzg0NzIsImV4cCI6MjAwODExNDQ3Mn0.e2mIq-UkIaO-aAbEr0m4_d0Jkp8KtmI9PtpJNHoUh0Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
