import styled, {ThemeContext} from 'styled-components'
import {Link} from "react-router-dom"
import {useContext} from 'react'
import useInput from "../../hook/useInput";

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.bg};
  
  input {
    color: #000;
  }
`

const Theme = () => {
  const theme = useContext(ThemeContext)
  const {value, onChange} = useInput('')

  return (
    <StyledTheme>
      <div>{theme.id} theme</div>
      <Link to="/">Go back to Snow</Link>
      <input type="text" value={value} onChange={onChange}/>
      <input type="text" value={value} onChange={onChange}/>
    </StyledTheme>
  )
}

export default Theme