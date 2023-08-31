import axios from 'axios'

const API_HOST = import.meta.env.VITE_API_HOST

interface IQuery {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  data?: Record<string, unknown>
  params?: Record<string, unknown>
  transform?: (data: Record<string, unknown>) => unknown
}

const baseQuery = async (args: IQuery) => {
  const { transform, ...query } = args

  try {
    const res = await axios({
      ...query,
      baseURL: API_HOST,
    })

    if (transform) {
      return transform(res.data)
    }

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default baseQuery