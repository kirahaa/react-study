import {createSlice} from '@reduxjs/toolkit'
import {catData} from '../utility/cat'

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    selectedCat: {},
    selectedId: null,
    cats: catData
  },
  reducers: {
    handleFeeding: (state, action) => {
      state.cats[state.selectedId].feeding = action.payload
    },
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => cat.id === action.payload)
      state.selectedId = JSON.parse(state.selectedCat.id)
    }
  }
})

export const {
  handleFeeding,
  handleSelectedCat
} = feedSlice.actions

export default feedSlice.reducer