import styled from 'styled-components'

const StyledBadge = styled.div`
  background-color: ${(props) => props.status === 'normal' ? 'green' : 'red'};
`

const Badge = ({status, children}) => {
  return (
    <StyledBadge status={status}>
      {children}
    </StyledBadge>
  )
}

export default Badge