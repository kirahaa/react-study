import {useEffect, useRef, useState} from "react"

const Room = () => {

  const [count, setCount] = useState(0)
  const [list, setList] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('mount')
    return console.log('unmount')
  }, [])

  useEffect(() => {
    if (count !== 0) {
      setList([...list, {'id': list.length, 'value': count}])
    }
    console.log(list)
  }, [count])

  return (
    <div>
      Coming soon!
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>

      <ul>
        {list.map((item, i) => (
          <li key={`${item}-${i}`}>{item.value}</li>))}
      </ul>
      <ol>
        {list.slice(0).sort((a, b) => b.value - a.value).map((item, i) => (
          <li key={`${i}-${item}`}>{item.value}</li>
        )) }
      </ol>
    </div>
  )
}

export default Room