import {Fragment} from "react"
import classNames from "classnames/bind"
import style from './Todo.module.scss'
import TodoHeader from "../../components/TodoHeader/TodoHeader"
import TodoBody from "../../components/TodoBody/TodoBody"
import {useDispatch, useSelector} from 'react-redux'
import {add, remove} from '../../redux/todo'
import styled from 'styled-components'
const cx = classNames.bind(style)

const TodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const StyledTodo = styled.div`
  max-width: 59rem;
  width: 100%;
  padding: 3rem;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgLight};
  border-radius: 2rem;
`

const Todo = () => {
  const dispatch = useDispatch()

  const storeTodos = useSelector(state => state.todo.todos)

  const addTodo = val => dispatch(add(val))

  const removeTodo = val => dispatch(remove(val))

  return (
    <Fragment>
      <TodoWrap>
        <StyledTodo>
          <TodoHeader storeTodos={storeTodos}/>
          <TodoBody
            storeTodos={storeTodos}
            addTodo={addTodo}
            removeTodo={removeTodo}
          />
        </StyledTodo>
      </TodoWrap>
    </Fragment>
  )
}

export default Todo