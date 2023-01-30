import {createSlice} from '@reduxjs/toolkit'
import {userData} from '../database/userData'

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    handleLogIn: (state, action) => {
      state.user = action.payload
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    handleLogOut: state => {
      state.user = {}
      localStorage.removeItem('userData')
    }
  }
})

export const {
  handleLogIn,
  handleLogOut
} = authSlice.actions

export default authSlice.reducer