import styled, {keyframes} from 'styled-components'

const fallAnimation = keyframes`
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  `

const StyledSnow = styled.div`
    position: absolute;
    top: -1rem;
    left: ${(props) => `${props.left}px` };
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;
    animation: ${fallAnimation} ${(props) => `${props.duration}s linear infinite`};
    animation-delay: ${(props) => `${props.delay}s`};
    opacity: ${(props) => props.opacity };
  `

const SnowFlake = ({left, delay, opacity, duration}) => {

  return (
    <StyledSnow
      left={left}
      delay={delay}
      opacity={opacity}
      duration={duration}>
    </StyledSnow>
  )
}
export default SnowFlake