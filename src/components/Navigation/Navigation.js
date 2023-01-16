import styled from "styled-components"
import {Link} from 'react-router-dom'
import lottie from 'lottie-web'
import { defineElement }  from 'lord-icon-element'

defineElement(lottie.loadAnimation)

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 6rem;
  padding: 1.75rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  backface-visibility: hidden;
`

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`

const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <li><Link to="/">
          <lord-icon
          src="https://cdn.lordicon.com/osuxyevn.json"
          trigger="hover"
          colors="primary:#121331"
          state="hover-3"
          style={{width: '32px', height: '32px'}}>
          </lord-icon>
        </Link></li>
        <li><Link to="/user">
          <lord-icon
            src="https://cdn.lordicon.com/bhfjfgqz.json"
            trigger="hover"
            style={{width: '32px', height: '32px'}}>
          </lord-icon>
        </Link></li>
        <li><Link to="/theme">
          <lord-icon
            src="https://cdn.lordicon.com/winbdcbm.json"
            trigger="hover"
            style={{width: '32px', height: '32px'}}>
          </lord-icon>
        </Link></li>
        <li><Link to="/todo">
          <lord-icon
            src="https://cdn.lordicon.com/qjuahhae.json"
            trigger="hover"
            colors="primary:#121331"
            state="hover"
            style={{width: '32px', height: '32px'}}>
          </lord-icon>
        </Link></li>
      </Menu>
    </Nav>
  )
}

export default Navigation