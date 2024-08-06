import axios from 'axios'
import router from '@/router'
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      const { status } = error.response
      router.replace({ name: 'error', params: { status } })
    }
    return Promise.reject(error)
  }
)
