import {BrowserRouter, Route, Routes} from "react-router-dom"
import Todo from "./Todo/Todo"
import Room from "./Room/Room"
import Home from "./Home/Home"
import Tree from './Tree/Tree'
import Snow from './Snow/Snow'
import Theme from "./Theme/Theme";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/theme" element={<Theme />}></Route>
        <Route path="/tree" element={<Tree />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Snow />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router