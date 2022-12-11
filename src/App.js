import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Room from './routes/Room'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
