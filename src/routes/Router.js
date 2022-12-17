import {BrowserRouter, Route, Routes} from "react-router-dom"
import Todo from "./Todo/Todo"
import Room from "./Room/Room"
import Home from "./Home/Home"

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router