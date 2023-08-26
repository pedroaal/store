import axios from 'axios'

const API_HOST = 'http://localhost:8080'
// const API_HOST = process.env.API_HOST

interface IQuery {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  data?: Record<string, unknown>
  params?: Record<string, unknown>
}

const baseQuery = async (args: IQuery) => {
  try {
    const res = await axios({
      ...args,
      baseURL: API_HOST,
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default baseQuery