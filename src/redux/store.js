import {configureStore, createSlice} from "@reduxjs/toolkit"

const toDos = createSlice({
  name: "todosReducer",
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, action) => {
      state.todos = action.payload
    }
  }
})

const store = configureStore({ reducer: toDos.reducer })

export const {
  add
} = toDos.actions

export default store