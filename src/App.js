import Router from './routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import './styles/App.module.scss'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
