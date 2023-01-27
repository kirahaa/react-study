import {useContext, useState, useRef} from "react"
import {AuthContext} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"

const useAuth = (initialValue) => {
  const {user, setUser, setCurrentUser, setIsLoggedIn} = useContext(AuthContext)
  const [form, setForm] = useState(initialValue)
  const [newAccount, setNewAccount] = useState(true)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const onChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (newAccount) {
        // create account
        let existedUser = user.filter(u => u.loginId === form.id).length

        if (existedUser !== 0) {
          alert('이미 존재하는 아이디입니다.')
        } else {
          setUser([...user, {loginId: form.id, password: form.password}])
          setNewAccount(false)
          alert(`${form.id}님 회원가입 되었습니다. 로그인 해주세요.`)
        }
        setForm({id: "", password: ""})
        inputRef.current.focus()
      } else {
        // sign in
        let ok = user.filter(u => u.loginId === form.id && u.password === form.password)
        if (ok.length > 0) {
          setIsLoggedIn(true);
          setCurrentUser(ok)
          navigate('/')
        } else {
          alert('입력하신 정보와 회원정보가 일치하지 않습니다.')
        }
      }
    } catch(error) {
      console.log(error, 'error')
    }
  }

  return [form, newAccount, setNewAccount, inputRef, onChange, handleSubmit]
}

export default useAuth