import {Fragment} from "react"
import classNames from "classnames/bind"
import style from './Todo.module.scss'
import TodoHeader from "../../components/TodoHeader/TodoHeader"
import TodoBody from "../../components/TodoBody/TodoBody"
import {useDispatch, useSelector} from 'react-redux'
import {add} from '../../redux/store'
const cx = classNames.bind(style)

const Todo = () => {
  const dispatch = useDispatch()

  const storeTodos = useSelector(state => state.todos)

  const addTodo = val => dispatch(add(val))

  console.log(storeTodos, 'storeTodos!!')

  return (
    <Fragment>
      <div className={cx('wrap')}>
        <div className={cx('todo')}>
          <TodoHeader storeTodos={storeTodos}/>
          <TodoBody
            storeTodos={storeTodos}
            addTodo={addTodo} />
        </div>
      </div>
    </Fragment>
  )
}

export default Todo