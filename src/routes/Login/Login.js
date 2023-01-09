import styled from "styled-components"
import {useState, useContext} from "react"
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
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!loginId || !password) {
      alert('정보를 입력해주세요.')
    } else {
      let userData = auth.user.filter(u => u.loginId === loginId && u.password === password)
      console.log(userData, 'userData');
      if (userData.length !== 0) {
        navigate('/user')
        auth.setUser([...userData])
      } else {
        alert('잘못된 유저 정보입니다.')
      }
    }
  }

  return (
    <StyledLogin>
      <WrapLogin onSubmit={handleSubmit}>
        <input
          type="text"
          value={loginId}
          placeholder="I D"
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="P A S S W O R D"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">L O G I N</button>
      </WrapLogin>
    </StyledLogin>
  )
}

export default Login