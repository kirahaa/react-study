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
        return cat.id === state.selectedCat.id ? {...cat, feeding: [...cat.feeding, action.payload] } : cat
      })
    },
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => cat.id === action.payload)
    },
    handleWeight: (state, action) => {
      state.cats = state.cats.map(cat => {
        return cat.id === state.selectedCat.id ? {...cat, weight: cat.weight + 1 } : cat
      })
    },
    handleAge: (state, action) => {
      state.cats = state.cats.map(cat => {
        return cat.id === state.selectedCat.id ? {...cat, age: cat.age + 1 } : cat
      })
    }
  }
})

export const {
  handleFeeding,
  handleSelectedCat,
  handleWeight,
  handleAge
} = feedSlice.actions

export default feedSlice.reducer