import {useContext, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext"
import Navigation from '../components/Navigation/Navigation'
import MainLayout from '../components/Layout/MainLayout'
import Todo from "./Todo/Todo"
import Room from "./Room/Room"
import Home from "./Home/Home"
import Tree from './Tree/Tree'
import Snow from './Snow/Snow'
import Theme from "./Theme/Theme"
import Login from "./Login/Login"
import User from './User/User'
import Calc from './Calc/Calc'
import Feed from './Feed/Feed'
import FeedDetail from './Feed/Detail/_id'

const Router = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <>
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
                <Route path="/calc" element={<Calc />}></Route>
                <Route path="/theme" element={<Theme />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/snow" element={<Snow />}></Route>
                <Route path="/tree" element={<Tree />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
                <Route path="/room" element={<Room />}></Route>
                <Route path="/feed" element={<Feed />}></Route>
                <Route path="/feed/:id" element={<FeedDetail />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />}></Route>
            </>
          )
        }
      </Routes>
    </>
  )
}

export default Router