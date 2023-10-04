import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    updateUserData: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { updateUserData } = authSlice.actions

export default authSlice.reducer
