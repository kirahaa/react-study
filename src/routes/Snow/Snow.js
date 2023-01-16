import {Menu} from 'react-feather'
import SnowFlake from "../../components/SnowFlake/SnowFlake"
import classNames from "classnames/bind"
import style from './Snow.module.scss'
import {useEffect, useRef, useState} from "react"
import styled, {ThemeContext} from "styled-components"
import {Link} from "react-router-dom"
import {useContext} from 'react'
const cx = classNames.bind(style)

let arr = Array.from('Wow Snowflakes are awesome!!! I love it!!! Happy new year!!! Wow Snowflakes are awesome!!! I love it!!! Happy new year!!!')

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.bg};
`

const Snow = () => {
  const theme = useContext(ThemeContext)

  const wrap = useRef()
  const [menuOpen, setMenuOpen] = useState(false)
  const [color, setColor] = useState(theme.colors.text)
  const [inputValue, setInputValue] = useState('')
  const [shape, setShape] = useState('')

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = e => {
    if (e.target === wrap.current) {
      setMenuOpen(false)
    }
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setShape(e.target.value)
      setInputValue('')
    }
  }

  const RenderSnowFlake = () => {
    return (
      <>
        {arr.map((a, i) => {
          let left = Math.random() * window.screen.width
          let delay = Math.random() * 10
          let opacity = Math.random()
          let duration = Math.random() * 20 + 10

          return (
            <SnowFlake
              key={`snow-${i}`}
              left={left}
              delay={delay}
              opacity={opacity}
              duration={duration}
              color={color}
              shape={shape}
            >
            </SnowFlake>
          )
        })}
      </>
    )
  }

  useEffect(() => {
    window.addEventListener('click', closeMenu)
    return () => {
      window.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <Wrap ref={wrap} className={cx('wrap')}>
      {RenderSnowFlake()}

      <div className={cx('menu')} onClick={toggleMenu}>
        <Menu color={theme.colors.text} size={40}/>
      </div>

      <div
        className={cx(
        'menu-slide',
        menuOpen && 'show'
      )}>
        <ul>
          <li>
            <div>theme</div>
            <button onClick={theme.setTheme}>{theme.id === 'dark' ? '☼' : '☾' }</button>
          </li>
          <li>
            <div>color</div>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </li>
          <li>
            <div>shape</div>
            <input
              type="text"
              value={inputValue}
              onKeyDown={onKeyDown}
              onChange={e => setInputValue(e.target.value)}
              maxLength={4}
              placeholder="write your shape(max 4)"
            />
          </li>
          <li>
            <div>link</div>
            <Link to="/theme">Theme page</Link>
          </li>
        </ul>
      </div>
    </Wrap>
  )
}

export default Snow