import styled from 'styled-components'

const StyledImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: ${(props) => props.radius ? '50%' : 0};
`

const Image = ({src, alt, radius}) => {
  return (
    <StyledImage src={src} alt={alt} radius={radius}/>
  )
}

export default Image