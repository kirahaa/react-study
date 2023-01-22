import {createSlice} from '@reduxjs/toolkit'
import {catData} from '../utility/cat'

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    selectedCat: {},
    cats: catData
  },
  reducers: {
    handleFeeding: (state, action) => {
      state.cats = action.payload
    },
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => cat.id === action.payload)
    }
  }
})

export const {
  handleFeeding,
  handleSelectedCat
} = feedSlice.actions

export default feedSlice.reducer