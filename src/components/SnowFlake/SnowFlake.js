import styled, {keyframes} from 'styled-components'

const SnowFlake = ({left, delay, opacity, duration}) => {

  const fallAnimation = keyframes`
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  `

  const StyledSnow = styled.div`
    position: absolute;
    top: -1rem;
    left: ${left}px;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;
    animation: ${fallAnimation} ${duration}s linear infinite;
    animation-delay: ${delay}s;
    opacity: ${opacity};
  `

  return (
    <StyledSnow>
    </StyledSnow>
  )
}
export default SnowFlake