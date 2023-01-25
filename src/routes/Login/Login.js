import styled from 'styled-components'
import {useRef} from "react"
import lottie from 'lottie-web'
import { defineElement }  from 'lord-icon-element'
import useAuth from "../../hook/useAuth";

defineElement(lottie.loadAnimation)

const Wrap = styled.div`
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
`

const AccountButton = styled.span`
  padding: 2rem 0;
  text-align: center;
  text-decoration: underline;
`

const WrapLogin = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  .lord-icon {
    margin-bottom: 1rem;
  }
  
  input {
    width: 100%;
    margin-bottom: 2%;
    padding: 3% 0;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.bgLight}`};
    border-radius: .5rem;
    font-size: 1.5rem;
    text-indent: 1rem;
    background: ${(props) => props.theme.colors.bgLight};
  }
  button {
    width: 100%;
    margin-top: 2%;
    padding: 3% 0;
    color: #fff;
    background: #30d49e;
    border-radius: .5rem;
    font-size: 1.5rem;
  }
`

const Login = () => {
  const [form, newAccount, setNewAccount, inputRef, onChange, handleSubmit] = useAuth({id: '', password: ''})

  const toggleAccount = () => setNewAccount(!newAccount)

  return (
    <Wrap>
      <StyledLogin>
        <WrapLogin onSubmit={handleSubmit}>
          <lord-icon
            class="lord-icon"
            src="https://cdn.lordicon.com/gqzfzudq.json"
            trigger="loop"
            colors={`primary:#414257, secondary:#08a88a`}
            style={{width: '180px', height: '180px'}}>
          </lord-icon>
          <input
            ref={inputRef}
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
          <AccountButton onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</AccountButton>
        </WrapLogin>
      </StyledLogin>
    </Wrap>
  )
}

export default Login