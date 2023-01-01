import styled from "styled-components"
import {useTheme} from "../../hooks/useTheme"
import {Link} from "react-router-dom"

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
  const {theme, setTheme, mode} = useTheme()

  return (
    <StyledTheme theme={mode}>
      <div>theme</div>
      <Link to="/">Go back to Snow</Link>
    </StyledTheme>
  )
}

export default Theme