import {createSlice} from '@reduxjs/toolkit'
import {userData} from '../database/userData'



export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false
  },
  reducers: {
    handleLogin: (state, action) => {
      state.user = action.payload
      localStorage.setItem('userData', JSON.stringify(action.payload))
      state.isLoggedIn = true
    },
    handleLogout: state => {
      state.user = {}
      state.removeItem('userData')
    }
  }
})

export const {
  handleLogin,
  handleLogout
} = authSlice.actions

export default authSlice.reducer