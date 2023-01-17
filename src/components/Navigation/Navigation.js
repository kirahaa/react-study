import styled, {ThemeContext} from 'styled-components'
import {Link} from 'react-router-dom'
import lottie from 'lottie-web'
import { defineElement }  from 'lord-icon-element'
import {useContext} from 'react'

defineElement(lottie.loadAnimation)

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 6rem;
  padding: 1.75rem 2rem;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgLight};
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  backface-visibility: hidden;
`

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`

const Navigation = () => {
  const theme = useContext(ThemeContext)

  return (
    <Nav>
      <Menu>
        <li>
          <Link to="/">
            <lord-icon
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              colors={`primary:${theme.colors.text}`}
              state="hover-3"
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
        <li>
          <Link to="/todo">
            <lord-icon
              src="https://cdn.lordicon.com/qjuahhae.json"
              trigger="hover"
              colors={`primary:${theme.colors.text}`}
              state="hover"
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
        <li>
          <Link to="/tree">
            <lord-icon
              src="https://cdn.lordicon.com/svbmmyue.json"
              trigger="hover"
              colors={`primary:${theme.colors.text}`}
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
        <li>
          <Link to="/calc">
            <lord-icon
              src="https://cdn.lordicon.com/qtldxoay.json"
              trigger="hover"
              colors={`primary:${theme.colors.text}`}
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
        <li>
          <Link to="/snow">
            <lord-icon
              src="https://cdn.lordicon.com/mxzuvjjs.json"
              colors={`primary:${theme.colors.text}`}
              trigger="hover"
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <lord-icon
              src="https://cdn.lordicon.com/bhfjfgqz.json"
              trigger="hover"
              colors={`primary:${theme.colors.text}`}
              style={{width: '32px', height: '32px'}}>
            </lord-icon>
          </Link>
        </li>
      </Menu>
    </Nav>
  )
}

export default Navigation