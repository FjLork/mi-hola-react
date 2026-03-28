import { supabase } from "./supabase"

export async function getTareas() {
  const { data, error } = await supabase
    .from("tareas")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data
}