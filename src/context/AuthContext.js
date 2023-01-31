import {createContext, useState} from 'react'
import {userData} from "../database/userData"

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const isLoggedIn = () => JSON.parse(localStorage.getItem('userData'))

  return (
    <AuthContext.Provider value={{isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}