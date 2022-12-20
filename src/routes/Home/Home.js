import onew from "../../onew.png"
import {useState} from "react"
import {Link} from 'react-router-dom'

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
    <div className="App">
      <header className="App-header">
        <img src={onew} className="App-logo" alt="onew" />
        <p>
          <b>Hello ! My name is Onew, I'm happy to meet you!</b>
        </p>
        <div>
          <Link to={`/todo`}>Todo</Link>
        </div>
        <form onSubmit={sendMsg}>
          <input
            type="text"
            className="App-input"
            placeholder="send me a message!"
            value={msg}
            onChange={onChange}
          />
          <button
            type="button"
            className="App-button"
            onClick={sendMsg}
          >enter</button>
        </form>
        <ul className="App-list">
          {lists.map((list, i) => {
            return (<li key={`${list}-${i}`} className="App-list-item">
              {list}
            </li>)
          })}
        </ul>
      </header>
    </div>
  )
}

export default Home