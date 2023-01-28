import {Fragment, useContext} from 'react'
import style from './TodoHeader.module.scss'
import classNames from "classnames/bind"
import {AuthContext} from '../../context/AuthContext'
import styled from 'styled-components'
const cx = classNames.bind(style)

const StyledHr = styled.hr`
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.border};
`

const TodoHeader = ({storeTodos}) => {
  const {currentUser} = useContext(AuthContext)
  const date = new Date()
  date.toString()

  const renderChecked = () => {
    return storeTodos.reduce((accumulator, current) => {
      if (current.checked === false) {
        return accumulator + 1
      }
      return accumulator
    }, 0)
  }

  const formatDate = date.toLocaleDateString('ko', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
  })

  return (
    <Fragment>
      <header className={cx('header')}>
        <p>{currentUser.loginId}님 안녕하세요 :)</p>
        <h1>{formatDate}</h1>
        <strong>할 일 {renderChecked()}개 남음</strong>
      </header>
      <StyledHr />
    </Fragment>
  )
}

export default TodoHeader