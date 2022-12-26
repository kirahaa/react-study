import styled from 'styled-components'
import style from './TreeChild.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(style)

const CircleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
`

const TreeChild = props => {
  const {data, data2, data3} = props

  return (
    <CircleWrap>
      <Circle className={cx(
        'circle',
        data && 'red',
        data2 && 'blue',
        data3 && 'yellow'
      )}>{data} {data2} {data3}</Circle>
    </CircleWrap>
  )
}

export default TreeChild