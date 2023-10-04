import api from "@/lib/api";
import {updateUserData} from "@/features/auth/authSlice";

export const login = (username: any, password: any): any => {
  return (dispatch: any) => {
    api.post('/login', {
      username, password
    }).then(res => {
      if (res?.data?.token) {
        dispatch(updateUserData(res.data))
        location.href = '/'
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const logout = (): any => {
  return (dispatch: any) => {
    dispatch(updateUserData(null))
    location.href = '/login'
  }
}
