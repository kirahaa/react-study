import Router from './routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import './styles/App.module.scss'
import {ThemeProvider} from 'styled-components'
import {dark, light} from './utility/theme'
import {useState} from 'react'
import {AuthProvider} from "./context/AuthContext"
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

const App = () => {
  const [theme, setTheme] = useState(dark)
  const persistor = persistStore(store)

  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={{
            ...theme,
            setTheme: () => {
              setTheme((t) => t === dark ? light : dark)
            }
          }}>
            <Router/>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
