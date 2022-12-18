import {configureStore, createSlice} from "@reduxjs/toolkit"

const toDos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({value: action.payload, id: Date.now()})
    }
  }
})