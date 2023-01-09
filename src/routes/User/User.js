import {useContext, useEffect} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"

const User = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.user.length !== 1) {
      alert('잘못된 접근입니다.')
      navigate('/')
    }
  }, [auth.user])

  return (
    <div>
      {auth.user.length === 1 ? (
        auth.user.map(u => (
          <ul key={u.loginId}>
            <li>이름 : {u.name}</li>
            <li>아이디 : {u.loginId}</li>
            <li>전화번호 : {u.phoneNumber}</li>
          </ul>
        ))
      ) : (
        <>
          잘못된 접근입니다.
        </>
      )
      }
    </div>
  )
}

export default User