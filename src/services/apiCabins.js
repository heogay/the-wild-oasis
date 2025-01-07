import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded!");
  }
  return data;
}

export async function createCabin(newCabinData, id) {
  const imageName = `${Math.random()}-${newCabinData.image.name}`.replaceAll(
    "/",
    ""
  );

  const hasImagePath = newCabinData.image?.startsWith?.(supabaseUrl);

  const imagePath = hasImagePath
    ? newCabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. CREATA/EDIT CABIN
  let query = supabase.from("cabins");

  // CREATE
  if (!id) query = query.insert([{ ...newCabinData, image: imagePath }]);

  //EDIT
  if (id)
    query = query.update({ ...newCabinData, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Error creating cabin!");
  }
  // 2. UPLOAD IMAGE
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabinData.image);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Failed to upload image!");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Error deleting cabin!");
  }
  toast.success("Cabin deleted");
}
