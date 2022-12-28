import styled from 'styled-components'

const CircleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TreeChild = ({isLight, setIsLight, color, children}) => {

  const turnOnLight = () => {
    setIsLight(!isLight)
  }

  const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  color: #fff;
  background-color: ${props => isLight ? props.color : 'lightgray'};
  border-radius: 50%;
  font-weight: bold;
`

  return (
    <CircleWrap>
      <Circle onClick={turnOnLight} color={color}>
        {children}
      </Circle>
    </CircleWrap>
  )
}

export default TreeChild