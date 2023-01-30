import {createSlice} from '@reduxjs/toolkit'
import {catData, catStatus} from '../database/cats'

const handleUpdateCats = (state) => {
  state.cats = state.cats.map(cat => {
    return cat.id === state.selectedCat.id ? {...state.selectedCat} : cat
  })
}

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    selectedCat: null,
    cats: catData
  },
  reducers: {
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => Number(cat.id) === action.payload)
    },
    handleFeedCount: (state, action) => {
      state.selectedCat = {
        ...state.selectedCat,
        feedCount: state.selectedCat.feedCount + 1
      }
      handleUpdateCats(state)
    },
    handleFeeding: (state, action) => {
      state.selectedCat = {
        ...state.selectedCat,
        feeding: [action.payload, ...state.selectedCat.feeding]
      }
      handleUpdateCats(state)
    },
    handleWeight: (state, action) => {
      state.selectedCat = {
        ...state.selectedCat,
        weight: Math.round((state.selectedCat.weight + action.payload) * 10) / 10
      }
      handleUpdateCats(state)
    },
    handleAge: (state, action) => {
      state.selectedCat = {
        ...state.selectedCat,
        age: state.selectedCat.age + 1
      }
      handleUpdateCats(state)
    },
    handleStatus: (state, action) => {
      state.selectedCat = {
        ...state.selectedCat,
        status: state.selectedCat.weight >= 30 && state.selectedCat.weight < 45 ? catStatus.status2 : (state.selectedCat.weight >= 45 ? catStatus.status3 : catStatus.status1)
      }
      handleUpdateCats(state)
    }
  }
})

export const {
  handleFeedCount,
  handleFeeding,
  handleSelectedCat,
  handleWeight,
  handleAge,
  handleStatus
} = feedSlice.actions

export default feedSlice.reducer