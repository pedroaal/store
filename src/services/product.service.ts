import supabase from '../config/supabase'

export const getProducts = async () => {
  const { data } = await supabase.from('products').select()
  return data
}