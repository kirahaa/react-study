import {Fragment, useState, useRef} from "react"
import style from './TodoBody.module.scss'
import classNames from "classnames/bind"
import styled from 'styled-components'
const cx = classNames.bind(style)

const Input = styled.input`
  width: 75%;
  border: 0;
  background: ${(props) => props.theme.colors.bgLight};
  border-bottom: 1px solid #30d49e;
  outline: none;
  font-size: 2rem;
`

const Select = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0 1rem;

  select {
    padding: 1rem;
    background: ${(props) => props.theme.colors.bgLight};
    border: ${(props) => `1px solid ${props.theme.colors.border}`};
    font-size: 1.5rem;
  }
`

const TodoBody = ({storeTodos, addTodo, removeTodo}) => {
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
    setSelectValue(e.target.value)
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
          <Input
            ref={inputRef}
            type="text"
            placeholder="할 일을 입력해주세요"
            value={value}
            onChange={onChange}
          />
          <button type="submit" onClick={onSubmit}>enter</button>
        </form>
        <Select>
          <select onChange={e => onSelect(e)} value={selectValue}>
            <option value='ascending'>등록순</option>
            <option value='descending'>최신순</option>
            <option value='alphabetical'>제목</option>
          </select>
        </Select>
        <ul className={cx('list')}>
          {storeTodos
            .slice(0)
            .sort((a, b) => {
              switch (selectValue) {
                case 'descending':
                  return b.id - a.id
                case 'alphabetical':
                  return a.value.toLowerCase() < b.value.toLowerCase() ? -1 : 1
                case 'ascending':
                  return a.id - b.id
                default:
                  return a.id - b.id
              }
          })
          .map((todo, i) => (
            <li key={`no.${i}-todo`}>
              <div className={cx('input-wrap')}>
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
              </div>
              <button type="button" onClick={() => removeTodo(todo)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default TodoBody