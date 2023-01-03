import React from 'react'
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
    color: ${(props) => props.color};
    background-color: ${(props) => props.shape ? 'transparent' : props.color};
    border-radius: 50%;
    animation: ${fallAnimation} ${(props) => `${props.duration}s linear infinite`};
    animation-delay: ${(props) => `${props.delay}s`};
    opacity: ${(props) => props.opacity };
  `

const SnowFlake = ({left, delay, opacity, duration, color, shape}) => {

  return (
    <StyledSnow
      left={left}
      delay={delay}
      opacity={opacity}
      duration={duration}
      color={color}
      shape={shape}>
      {shape}
    </StyledSnow>
  )
}
export default React.memo(SnowFlake)