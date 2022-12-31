import {Menu} from 'react-feather'
import SnowFlake from "../../components/SnowFlake/SnowFlake"
import classNames from "classnames/bind"
import style from './Snow.module.scss'
import {useEffect, useRef, useState} from "react"
const cx = classNames.bind(style)

let arr = Array.from('Wow Snowflakes are awesome!!! I love it!!! Happy new year!!! Wow Snowflakes are awesome!!! I love it!!! Happy new year!!!')

const Snow = () => {
  const wrap = useRef()
  const [menuOpen, setMenuOpen] = useState(false)
  const [color, setColor] = useState('#ffffff')

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = e => {
    if (e.target === wrap.current) {
      setMenuOpen(false)
    }
  }

  const handleTheme = () => {
    // TODO:: Theme 바꾸기
  }

  const renderSnowFlake = () => {
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
    <div ref={wrap} className={cx('wrap')}>
      {renderSnowFlake()}

      <div className={cx('menu')} onClick={toggleMenu}>
        <Menu color="#fff" size={40}/>
      </div>

      <div
        className={cx(
        'menu-slide',
        menuOpen && 'show'
      )}>
        <ul>
          <li>
            <div>Choose your color</div>
            <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <label htmlFor="color"></label>
          </li>
          <li>
            <button onClick={handleTheme}>theme</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Snow