import {useContext, useEffect} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"

const User = () => {
  const {user, currentUser, isLoggedIn, LogOut} = useContext(AuthContext)
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
    <div>
      {isLoggedIn ? (
        currentUser.map(u => (
          <ul key={u.loginId}>
            <li>아이디 : {u.loginId}</li>
          </ul>
        ))
      ) : (
        <>
          잘못된 접근입니다.
        </>
      )
      }
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default User