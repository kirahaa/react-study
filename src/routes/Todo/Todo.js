import {Fragment} from "react"
import classNames from "classnames/bind"
import style from './Todo.module.scss'
import TodoHeader from "../../components/TodoHeader/TodoHeader"
import TodoBody from "../../components/TodoBody/TodoBody"
import {useDispatch, useSelector} from 'react-redux'
import {add, remove} from '../../redux/store'
const cx = classNames.bind(style)

const Todo = () => {
  const dispatch = useDispatch()

  const storeTodos = useSelector(state => state.todos)

  const addTodo = val => dispatch(add(val))

  const removeTodo = val => dispatch(remove(val))

  return (
    <Fragment>
      <div className={cx('wrap')}>
        <div className={cx('todo')}>
          <TodoHeader storeTodos={storeTodos}/>
          <TodoBody
            storeTodos={storeTodos}
            addTodo={addTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Todo