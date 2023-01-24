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
      state.cats = state.cats.map(cat => {
        return cat.id === state.selectedCat.id ? {...cat, feeding: action.payload} : cat
      })
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