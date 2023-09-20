import axios from "axios"
// import {useAuthStore} from "../stores/modules/auth";
// import {useGlobalStore} from "../stores/global";

const setup = (url: string) => {
  const instance = axios.create({
    baseURL: url,
  })

  instance.interceptors.request.use(function (config: any) {
    // const auth = useAuthStore();

    // if (auth && auth.token)
    //   config.headers.Authorization = 'Bearer ' + auth.token

    return config
  }, function (error: any) {
    return Promise.reject(error)
  })

  instance.interceptors.response.use((res: any) => {
    // const global = useGlobalStore()

    const { data } = res

    const msg = res.status === 200 && !data.result && data.message

    // if (msg) global.setNotification(msg, 'success')

    return res.data
  }, function (error: any) {

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

  return instance
}

// @ts-ignore
export default setup(process.env.NEXT_PUBLIC_API_URL)
