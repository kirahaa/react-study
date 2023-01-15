import {BrowserRouter, Route, Routes} from "react-router-dom"
import Todo from "./Todo/Todo"
import Room from "./Room/Room"
import Home from "./Home/Home"
import Tree from './Tree/Tree'
import Snow from './Snow/Snow'
import Theme from "./Theme/Theme"
import Login from "./Login/Login"
import User from './User/User'
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const Router = () => {
  const {isLoggedIn} = useContext(AuthContext);

  console.log(isLoggedIn, 'isLoggedIn');

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/theme" element={<Theme />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/snow" element={<Snow />}></Route>
              <Route path="/tree" element={<Tree />}></Route>
              <Route path="/todo" element={<Todo />}></Route>
              <Route path="/room" element={<Room />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Router