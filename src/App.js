import Router from './routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import './styles/App.module.scss'
import './App.css'
import {ThemeProvider} from 'styled-components'
import {dark, light} from './utility/theme'
import {userData} from "./utility/userData"
import {useState} from 'react'
import {AuthContext} from "./context/AuthContext"

const App = () => {
  const [theme, setTheme] = useState(dark)
  const [user, setUser] = useState(userData)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Provider store={store}>
        <ThemeProvider theme={{
          ...theme,
          setTheme: () => {
            setTheme((t) => t === dark ? light : dark)
          }
        }}>
          <Router/>
        </ThemeProvider>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
