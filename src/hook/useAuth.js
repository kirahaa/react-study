import {useState, useRef} from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {createUserAccount, handleLogIn} from '../redux/auth'

const useAuth = (initialValue) => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.auth.users)
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
        let existedUser = users.find(u => u.loginId === form.id)

        if (existedUser) {
          alert('이미 존재하는 아이디입니다.')
        } else {
          dispatch(createUserAccount({loginId: form.id, password: form.password}))
          setNewAccount(false)
          alert(`${form.id}님 회원가입 되었습니다. 로그인 해주세요.`)
        }
        setForm({id: "", password: ""})
        inputRef.current.focus()
      } else {
        // sign in
        let presentUser = users.find(u => u.loginId === form.id && u.password === form.password)

        if (presentUser) {
          dispatch(handleLogIn(presentUser))
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