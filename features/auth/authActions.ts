import api from "@/lib/api";
import {login} from "@/features/auth/authSlice";

export const doLogin = (username: any, password: any): any => {
  return (dispatch: any) => {
    api.post('/login', {
      username, password
    }).then(res => {
      if (res?.data?.token) {
        dispatch(login(res.data))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
