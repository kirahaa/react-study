import {createSlice} from '@reduxjs/toolkit'
import {userData} from '../database/userData'

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: userData,
    currentUser: null,
  },
  reducers: {
    createUserAccount: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    handleLogIn: (state, action) => {
      state.currentUser = action.payload
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    handleLogOut: state => {
      localStorage.removeItem('userData')
    }
  }
})

export const {
  createUserAccount,
  handleLogIn,
  handleLogOut
} = authSlice.actions

export default authSlice.reducer