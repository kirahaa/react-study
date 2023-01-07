import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
`

const WrapLogin = styled.div`
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
  return (
    <StyledLogin>
      <WrapLogin>
        <input type="text" placeholder="I D" />
        <input type="password" placeholder="P A S S W O R D" />
        <button type="submit">L O G I N</button>
      </WrapLogin>
    </StyledLogin>
  )
}

export default Login