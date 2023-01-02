import styled, {ThemeContext} from 'styled-components'
import {Link} from "react-router-dom"
import {useContext} from 'react'

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
`

const Theme = () => {
  const theme = useContext(ThemeContext)

  return (
    <StyledTheme>
      <div>{theme.id} theme</div>
      <Link to="/">Go back to Snow</Link>
    </StyledTheme>
  )
}

export default Theme