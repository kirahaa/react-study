import {Fragment} from "react"
import classNames from "classnames/bind"
import style from './Todo.module.scss'
import TodoHeader from "../../components/TodoHeader/TodoHeader"
import TodoBody from "../../components/TodoBody/TodoBody"
const cx = classNames.bind(style)

const Todo = () => {
  return (
    <Fragment>
      <div className={cx('wrap')}>
        <div className={cx('todo')}>
          <TodoHeader />
          <TodoBody />
        </div>
      </div>
    </Fragment>
  )
}

export default Todo