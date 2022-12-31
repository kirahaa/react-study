import styled from 'styled-components'
import SnowFlake from "../../components/SnowFlake/SnowFlake";

const Winter = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
  `

const Snow = () => {

  let arr = Array.from('Wow Snowflakes are awesome!!! I love it!!! Happy new year!!!')

  return (
    <Winter>
      {arr.map((a, i) => {
        let left = Math.random() * window.screen.width
        let delay = Math.random() * 10
        let opacity = Math.random()
        let duration = Math.random() * 20 + 10

        return (
          <SnowFlake
            key={`snow-${i}`}
            left={left}
            delay={delay}
            opacity={opacity}
            duration={duration}>
          </SnowFlake>
        )
      })}
    </Winter>
  )
}

export default Snow