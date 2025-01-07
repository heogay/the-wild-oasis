import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://phgymhgzrmiogftxonyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZ3ltaGd6cm1pb2dmdHhvbnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzE2NzUsImV4cCI6MjA1MDQ0NzY3NX0.KfhIMaIknGl9A6KeyC7hgKEFBr3_ZkzdOLF4YEjFiI8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
