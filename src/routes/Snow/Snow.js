import styled from 'styled-components'
import SnowFlake from '../../components/SnowFlake/SnowFlake'

const Snow = () => {

  const Winter = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
  `

  return (
    <Winter>
      <SnowFlake/>
    </Winter>
  )
}
export default Snow