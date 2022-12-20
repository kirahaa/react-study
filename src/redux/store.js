import {configureStore, createSlice} from "@reduxjs/toolkit"

const toDos = createSlice({
  name: "todosReducer",
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

const store = configureStore({ reducer: toDos.reducer })

export const {
  add,
  remove
} = toDos.actions

export default store