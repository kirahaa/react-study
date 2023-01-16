import {BrowserRouter, Route, Routes} from "react-router-dom"
import Todo from "./Todo/Todo"
import Room from "./Room/Room"
import Home from "./Home/Home"
import Tree from './Tree/Tree'
import Snow from './Snow/Snow'
import Theme from "./Theme/Theme"
import Login from "./Login/Login"
import User from './User/User'
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import Navigation from '../components/Navigation/Navigation'
import MainLayout from '../components/Layout/MainLayout'

const Router = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isLoggedIn && (
        <>
          <Navigation />
        </>
      )}
      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/" element={<MainLayout />}>
                <Route path="/theme" element={<Theme />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/snow" element={<Snow />}></Route>
                <Route path="/tree" element={<Tree />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
                <Route path="/room" element={<Room />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Route>
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