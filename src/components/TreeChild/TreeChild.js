import {Fragment} from 'react'
import styled from 'styled-components'

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
  background-color: ${(props) => props.bgColor || 'lightgray'};
  border-radius: 50%;
  font-weight: bold;
`

const TreeChild = ({color}) => {
  return (
    <CircleWrap>
      <Circle bgColor={color}></Circle>
    </CircleWrap>
  )
}

export default TreeChild