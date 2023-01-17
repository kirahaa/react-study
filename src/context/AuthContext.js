import {createContext, useState} from "react"
import {userData} from "../utility/userData"

export const AuthContext = createContext(null)

export const AuthProvider = ({isLoggedIn: isLoggedInProp, children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
  const [user, setUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState([])

  return (
    <AuthContext.Provider value={{user, setUser, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}