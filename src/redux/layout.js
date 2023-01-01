import {createSlice} from "@reduxjs/toolkit"

const initialTheme = () => {
  const item = window.localStorage.getItem('theme')
  return item ? JSON.parse(item) : true
}

export const layoutSlice = createSlice({
  initialState: {
    theme: initialTheme()
  },
  name: 'layout',
  reducers: {
    handleTheme: (state, action) => {
      state.theme = action.payload
      window.localStorage.setItem('theme', action.payload)
    }
  }
})

export const {
  handleTheme
} = layoutSlice.actions

export default layoutSlice.reducer