import {Fragment, useEffect, useState, useRef} from "react"
import style from './TodoBody.module.scss'
import classNames from "classnames/bind"
const cx = classNames.bind(style)

const TodoBody = () => {
  const inputRef = useRef(null)
  const [formVisible, setFormVisible] = useState(false)
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [selectValue, setSelectValue] = useState('ascending')

  const toggleForm = () => {
    setFormVisible(!formVisible)
    if (!formVisible) {
      inputRef.current.focus()
    }
  }

  const onChange = e => {
    setValue(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setTodos([...todos, {id: todos.length, value: value, checked: false}])
    setValue('')
  }

  const onSelect = e => {
    setSelectValue(e.target.value)
  }

  useEffect(() => {
    console.log(todos , 'todo')
  }, [todos])

  useEffect(() => {
    const currentTodos = [...todos]

    if (selectValue === 'descending') { // 내림차순
      currentTodos.sort((a, b) => b.id - a.id)
      setTodos(currentTodos)
    } else if (selectValue === 'alphabetical') { // 가나다순
      currentTodos.sort((a, b) => a.value.toLowerCase() < b.value.toLowerCase() ? -1 : 1)
      setTodos(currentTodos)
    } else { // 오름차순(default)
      currentTodos.sort((a, b) => a.id - b.id)
      setTodos(currentTodos)
    }
  }, [selectValue])

  return (
    <Fragment>
      <div>
        <button
          type="button"
          className={cx(
            'addBtn',
            formVisible && 'x'
          )}
          onClick={toggleForm}
        >+</button>
        <form className={cx(
          'form',
          formVisible && 'show'
        )} onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="할 일을 입력해주세요"
            value={value}
            onChange={onChange}
          />
          <button type="submit" onClick={onSubmit}>enter</button>
        </form>
        <div className={cx('select')}>
          <select onChange={onSelect} value={selectValue}>
            <option value='ascending'>등록순</option>
            <option value='descending'>최신순</option>
            <option value='alphabetical'>제목</option>
          </select>
        </div>
        <ul className={cx('list')}>
          {todos.map((todo, i) => (
            <li key={`no.${i}-todo`}>
              <input
                type="checkbox"
                id={`no.${i}-ckbox`}
                onChange={e => {
                  const currntTodos = todos.map(t => {
                    return t === todo ? {...t, checked: e.target.checked} : t
                  })
                  setTodos(currntTodos)
                }}/>
              <label htmlFor={`no.${i}-ckbox`} className={cx('checkLabel')}></label>
              <label htmlFor={`no.${i}-ckbox`}>{todo.value}</label>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default TodoBody