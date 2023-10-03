import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      location.href = '/'
    },
    logout: (state) => {
      state.user = null
      location.href = '/login'
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
