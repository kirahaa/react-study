import styled from 'styled-components'
import {catStatus} from '../../database/cats'

export const StyledBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  padding: .5rem 1rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${ props => {
  if (props.status === catStatus.status1) return "rgba(40, 199, 111, .22)"
  else if (props.status === catStatus.status2) return "rgba(255, 159, 67, .22)"
  else return 'rgba(168, 170, 174, .22)'
}};
  color: ${props => {
  if (props.status === catStatus.status1) return '#28C768'
  else if (props.status === catStatus.status2) return '#FF9F43'
  else return '#A8AAAE'
}};
  z-index: 1;
`

const Badge = ({status, children}) => {
  return (
    <StyledBadge status={status}>
      {children}
    </StyledBadge>
  )
}

export default Badge