import supabase from '../config/supabase'

export const getCategories = async () => {
  const { data } = await supabase.from('categories').select()
  return data
}