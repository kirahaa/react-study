import {createContext, useState} from 'react'
import {userData} from "../database/userData"

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState([])

  const isLoggedIn = () => JSON.parse(localStorage.getItem('userData'))

  return (
    <AuthContext.Provider value={{user, setUser, currentUser, setCurrentUser, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}