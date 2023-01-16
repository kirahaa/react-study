import {useContext, useEffect} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"
import classNames from 'classnames/bind'
import style from './User.module.scss'
import lottie from 'lottie-web'
import { defineElement }  from 'lord-icon-element'

defineElement(lottie.loadAnimation)

const cx = classNames.bind(style)

const User = () => {
  const {currentUser, isLoggedIn, LogOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      LogOut()
      navigate('/')
    }
  }

  useEffect(() => {
    if (!isLoggedIn) {
      alert('잘못된 접근입니다.')
      navigate('/')
    }
  }, [isLoggedIn])

  return (
    <div className={cx('user')}>
      <div>
        <lord-icon
          src="https://cdn.lordicon.com/lupuorrc.json"
          trigger="loop"
          style={{width: '200px', height: '200px'}}>
        </lord-icon>
      </div>
      {currentUser.map(u => (
        <h2 key={u.loginId} className={cx('user__title')}>Welcome! {u.loginId}</h2>
      ))}
      <button onClick={handleLogOut} className={cx('user__btn', '--logout')}>Log out</button>
    </div>
  )
}

export default User