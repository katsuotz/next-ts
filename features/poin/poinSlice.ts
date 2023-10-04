import { createSlice } from '@reduxjs/toolkit'
import {Poin} from "@/lib/interfaces/data-poin";
import {Pagination} from "@/lib/interfaces/table";

const initialState:{
  poin: Poin[];
  pagination: Pagination;
} = {
  poin: [],
  pagination: {
    page: 1,
    total_page: 1,
    per_page: 10,
    total_item: 1,
  }
}

export const poinSlice = createSlice({
  name: 'poin',
  initialState,
  reducers: {
    updatePoinData: (state, action) => {
      state.poin = action.payload
    },
    updatePoinPagination: (state, action) => {
      state.pagination = action.payload
    },
  },
})

export const { updatePoinData, updatePoinPagination } = poinSlice.actions

export default poinSlice.reducer
