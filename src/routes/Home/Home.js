import onew from "../../onew.png"
import {useState} from "react"
import classNames from 'classnames/bind'
import style from './Home.module.scss'
import styled from 'styled-components'
const cx = classNames.bind(style)

const HomeWrap = styled.div`
  color: ${(props) => props.theme.colors.text};
`

const Home = () => {
  const [msg, setMsg] = useState('')
  const [lists, setLists] = useState([])

  const onChange = e => {
    setMsg(e.target.value)
  }

  const sendMsg = e => {
    e.preventDefault()
    setMsg('')
    setLists([...lists, msg])
  }

  return (
    <HomeWrap>
      <header className={cx("App-header")}>
        <img src={onew} className={cx("App-logo")} alt="onew" />
        <p>
          <b>Hello ! My name is Onew, I'm happy to meet you!</b>
        </p>
        <form onSubmit={sendMsg}>
          <input
            type="text"
            className={cx("App-input")}
            placeholder="send me a message!"
            value={msg}
            onChange={onChange}
          />
          <button
            type="button"
            className={cx("App-button")}
            onClick={sendMsg}
          >enter</button>
        </form>
        <ul className={cx("App-list")}>
          {lists.map((list, i) => {
            return (<li key={`${list}-${i}`} className={cx("App-list-item")}>
              {list}
            </li>)
          })}
        </ul>
      </header>
    </HomeWrap>
  )
}

export default Home