import Router from './routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import './styles/App.module.scss'
import './App.css'
import {ThemeProvider} from 'styled-components'
import {dark, light} from './utility/theme'
import {useState} from 'react'
import {AuthProvider} from "./context/AuthContext"

const App = () => {
  const [theme, setTheme] = useState(dark)

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
