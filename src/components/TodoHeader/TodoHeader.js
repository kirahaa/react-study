import {Fragment} from "react"
import style from './TodoHeader.module.scss'
import classNames from "classnames/bind"
const cx = classNames.bind(style)

const TodoHeader = () => {
  const date = new Date()
  date.toString()

  const formatDate = date.toLocaleDateString('ko', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
  })

  return (
    <Fragment>
      <header className={cx('header')}>
        <h1>{formatDate}</h1>
        <strong>할 일 2개 남음</strong>
      </header>
      <hr />
    </Fragment>
  )
}

export default TodoHeader