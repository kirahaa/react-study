import {useState} from 'react'
import TreeChild from '../../components/TreeChild/TreeChild'
import styled from 'styled-components'

const arr = [
  { id: 1, color: 'red' },
  { id: 2, color: 'orange' },
  { id: 3, color: 'yellow' },
  { id: 4, color: 'green' },
  { id: 5, color: 'blue' },
  { id: 6, color: 'navy' },
  { id: 7, color: 'purple' },
  { id: 8, color: 'pink' },
  { id: 9, color: 'lightgray' },
  { id: 10, color: 'gray' }
]

const StyledTree = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 4rem auto;
  padding: 1rem;
  gap: 1.4rem;
  background-color: #eeeeee;
  cursor: pointer;
`

const Tree = () => {

  const [color, setColor] = useState(null)

  const onClick = props => {
    if (!color) {
      setColor(props)
    } else {
      setColor(null)
    }
  }

  return (
    <>
      <StyledTree onClick={() => onClick('springgreen')}>
        <TreeChild color={color}/>
      </StyledTree>
      <StyledTree onClick={() => onClick('green')}>
        <TreeChild color={color}/>
      </StyledTree>
    </>
  )
}

export default Tree