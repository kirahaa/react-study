import {createSlice} from "@reduxjs/toolkit"

const initialTheme = () => {
  const item = window.localStorage.getItem('theme')
  return item ? JSON.parse(item) : 'dark'
}

export const layoutSlice = createSlice({
  initialState: {
    theme: initialTheme()
  },
  name: 'layout',
  handleTheme: (state, action) => {
    state.theme = action.payload
    window.localStorage.setItem('theme', JSON.stringify(action.payload))
  }
})

export const {
  handleTheme
} = layoutSlice.actions

export default layoutSlice.reducer