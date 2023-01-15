import styled from "styled-components"
import {useState, useContext, useEffect} from "react"
import useInput from '../../hook/useInput'
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
`

const AcountButton = styled.span`
  padding: 2rem 0;
  text-align: center;
  text-decoration: underline;
`

const WrapLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2% 0;
  
  input {
    margin-bottom: 2%;
    padding: 3% 0;
    border-bottom: 1px solid #eee;
    font-size: 1.5rem;
  }
  button {
    margin-top: 2%;
    padding: 3% 0;
    color: #fff;
    background: #30d49e;
    border-radius: .1rem;
    font-size: 1.5rem;
  }
`

const Login = () => {
  const [form, setForm] = useState({id: "", password: ""})
  const [newAccount, setNewAccount] = useState(true)
  const {user, setUser, setCurrentUser, LogIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const onChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }

  const toggleAccount = () => setNewAccount(!newAccount)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (newAccount) {
        // create account
        setUser([...user, {loginId: form.id, password: form.password}])
      } else {
        // sign in
        let ok = user.filter(u => u.loginId === form.id && u.password === form.password)
        if (ok.length > 0) {
          LogIn()
          setCurrentUser([{loginId: form.id, password: form.password}])
          navigate('/user')
        }
      }
    } catch(error) {
      console.log(error, 'error')
    }
  }

  useEffect(() => {
    console.log(user, 'user')
  }, [user])

  return (
    <StyledLogin>
      <WrapLogin onSubmit={handleSubmit}>
        <input
          name="id"
          type="text"
          placeholder="I D"
          value={form.id}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="P A S S W O R D"
          value={form.password}
          onChange={onChange}
          required
        />
        <button type="submit">{newAccount ? "Create Account" : "Sign In"}</button>
        <AcountButton onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</AcountButton>
      </WrapLogin>
    </StyledLogin>
  )
}

export default Login