import {createSlice} from '@reduxjs/toolkit'
import {catData, catStatus} from '../utility/cats'

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    selectedCat: null,
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
    },
    handleStatus: (state, action) => {
      state.cats = state.cats.map(cat => {
        return cat.id ===  state.selectedCat.id ? {...cat, status: cat.weight >= 30 && cat.weight < 45 ? catStatus.status2 : (cat.weight >= 45 ? catStatus.status3 : catStatus.status1)} : cat
      })
    }
  }
})

export const {
  handleFeeding,
  handleSelectedCat,
  handleWeight,
  handleAge,
  handleStatus
} = feedSlice.actions

export default feedSlice.reducer