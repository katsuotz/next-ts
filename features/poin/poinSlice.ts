import { createSlice } from '@reduxjs/toolkit'

interface Poin {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  poin: number;
}

const initialState:{
  poin: Poin[];
} = {
  poin: [],
}

export const poinSlice = createSlice({
  name: 'poin',
  initialState,
  reducers: {
    updatePoinData: (state, action) => {
      state.poin = action.payload
    },
  },
})

export const { updatePoinData } = poinSlice.actions

export default poinSlice.reducer
