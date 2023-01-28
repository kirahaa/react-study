import styled from "styled-components";
import {catStatus} from "../../database/cats";

export const StyledButton = styled.button`
  width: ${props => {
    if (props.width) return props.width
  }};
  padding: .8rem 2rem;
  border-radius: .5rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${props => {
    if (props.bgColor) return props.theme.colorChip[props.bgColor]
  }};
  opacity: ${(props) => {
    if (props.status === catStatus.status3) return .3
    else return 1
  }};
`

const Button = ({width, bgColor, children, onClick}) => {
  return (
    <StyledButton width={width} bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button