import { createSlice } from '@reduxjs/toolkit'

interface User {
  user?: {
    user: Object;
    token: string;
  }
}

const initialState: User = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { updateUserData } = authSlice.actions

export default authSlice.reducer
