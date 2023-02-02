import styled from 'styled-components'
import {catStatus} from '../../database/cats'

export const StyledImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: ${(props) => props.radius ? '50%' : 0};
  filter: ${props => {
    if (props.status === catStatus.status3) return 'grayScale(1)'
  }};
`

const Image = ({src, alt, radius, status}) => {
  return (
    <StyledImage src={src} alt={alt} radius={radius} status={status}/>
  )
}

export default Image