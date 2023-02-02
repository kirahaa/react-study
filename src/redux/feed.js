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
    // handleRecordList: (state, action) => {
    //   state.selectedCat = {
    //     ...state.selectedCat,
    //     recordList: [...state.selectedCat.recordList, action.payload]
    //   }
    //   handleUpdateCats(state)
    // },
    // handleWeight: (state, action) => {
    //   state.selectedCat = {
    //     ...state.selectedCat,
    //     weight: Math.round((state.selectedCat.weight + action.payload) * 10) / 10
    //   }
    //   handleUpdateCats(state)
    // },
    // handleAge: (state, action) => {
    //   const feedCount = state.selectedCat.recordList.filter(record => {
    //     return record.type !== catStatus.status4
    //   }).length
    //
    //   state.selectedCat = {
    //     ...state.selectedCat,
    //     age: feedCount % 3 === 0 ? state.selectedCat.age + 1 : state.selectedCat.age
    //   }
    //   handleUpdateCats(state)
    // },
    // handleStatus: (state, action) => {
    //   const percentageOfWeight = (state.selectedCat.weight / state.selectedCat.age) * 100
    //
    //   state.selectedCat = {
    //     ...state.selectedCat,
    //     status: state.selectedCat.weight >= 30 && state.selectedCat.weight < 45 ? catStatus.status2 : (state.selectedCat.weight >= 45 || percentageOfWeight < 10 ? catStatus.status3 : catStatus.status1)
    //   }
    //   handleUpdateCats(state)
    // },
    handleReset: (state, action) => {
      state.cats = catData
    }
  }
})

export const {
  // handleRecordList,
  // handleSelectedCat,
  // handleWeight,
  // handleAge,
  // handleStatus,
  handleReset
} = feedSlice.actions

export default feedSlice.reducer