import {Fragment, useState, useRef} from "react"
import style from './TodoBody.module.scss'
import classNames from "classnames/bind"
const cx = classNames.bind(style)

const TodoBody = ({storeTodos, addTodo}) => {
  const inputRef = useRef(null)
  const [formVisible, setFormVisible] = useState(false)
  const [value, setValue] = useState('')
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
    if (value) {
      addTodo([...storeTodos, {id: storeTodos.length, value: value, checked: false}])
    } else {
      alert('할 일을 입력해주세요')
    }

    setValue('')
  }

  const onSelect = e => {
    const currentTodos = [...storeTodos]

    setSelectValue(e.target.value)

    if (e.target.value === 'descending') {
      currentTodos.sort((a, b) => b.id - a.id)
      addTodo(currentTodos)
    } else if (e.target.value === 'alphabetical') {
      currentTodos.sort((a, b) => a.value.toLowerCase() < b.value.toLowerCase() ? -1 : 1)
      addTodo(currentTodos)
    } else { // 오름차순(default)
      currentTodos.sort((a, b) => a.id - b.id)
      addTodo(currentTodos)
    }
  }

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
          <select onChange={e => onSelect(e)} value={selectValue}>
            <option value='ascending'>등록순</option>
            <option value='descending'>최신순</option>
            <option value='alphabetical'>제목</option>
          </select>
        </div>
        <ul className={cx('list')}>
          {storeTodos.map((todo, i) => (
            <li key={`no.${i}-todo`}>
              <input
                type="checkbox"
                id={`no.${i}-ckbox`}
                onChange={e => {
                  const currentTodos = storeTodos.map(t => {
                    return t === todo ? {...t, checked: e.target.checked} : t
                  })
                  addTodo(currentTodos)
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