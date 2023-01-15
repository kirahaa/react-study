import {createContext, useState, useContext} from "react"
import {userData} from "../utility/userData"

export const AuthContext = createContext(null)

export const AuthProvider = ({isLoggredIn: isLoggedInProp, children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
  const [user, setUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState([])

  const LogIn = () => {
    setIsLoggedIn(true);
  }

  const LogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{user, setUser, currentUser, setCurrentUser, isLoggedIn, LogIn, LogOut}}>
      {children}
    </AuthContext.Provider>
  )
}