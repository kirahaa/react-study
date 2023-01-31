import Router from './routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import './assets/styles/App.module.scss'
import {ThemeProvider} from 'styled-components'
import {dark, light} from './utility/theme'
import {useState} from 'react'
import {AuthProvider} from "./context/AuthContext"
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'

export const persistor = persistStore(store)

const App = () => {
  const [theme, setTheme] = useState(dark)

  return (
    <RecoilRoot>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={{
              ...theme,
              setTheme: () => {
                setTheme((t) => t === dark ? light : dark)
              }
            }}>
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Router/>
              </BrowserRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
