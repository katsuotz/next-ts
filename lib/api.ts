import axios from "axios"
import {store} from "@/store";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(function (config: any) {
  const state = store.getState()

  if (state.auth.user) {
    config.headers.Authorization = 'Bearer ' + state.auth.user?.token
  }

  return config
}, function (error: any) {
  // console.log('config error')
  return Promise.reject(error)
})

api.interceptors.response.use((res: any) => {
  // const global = useGlobalStore()
  // console.log('response')
  const { data } = res

  const msg = res.status === 200 && !data.result && data.message

  // if (msg) global.setNotification(msg, 'success')

  return res.data
}, function (error: any) {
  // console.log('response error', error)

  const msg = error?.response?.data?.message || error?.response?.data?.error

  if (msg) {
    const errorDesc = (typeof error.response.data?.error === 'string' && error.response.data?.error) || ''
    // global.setNotification(msg, 'danger', msg === errorDesc ? '' : errorDesc)
  }
  else if (typeof error.code === 'string') {
    // global.setNotification(error.message || error.code, 'danger')
  }

  return Promise.reject(error?.response)
})


// @ts-ignore
export default api
