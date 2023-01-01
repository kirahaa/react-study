import {createSlice} from "@reduxjs/toolkit"

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, action) => {
      state.todos = action.payload
    },
    remove: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const {
  add,
  remove
} = todoSlice.actions

export default todoSlice.reducer