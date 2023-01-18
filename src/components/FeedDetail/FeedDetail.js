import styled from 'styled-components'
import { FaBone } from 'react-icons/fa'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  width: 100%;
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.colors.bgLight};
`

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.primary};
  border-radius: 1rem;
`

const Item = styled.div`
  display: flex;
  padding: 1rem 0;
`

const ItemDate = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
`

const IconWrap = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: .5rem .5rem;
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 50%;
`

const InfoWrap = styled.span`
  display: inline-flex;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
`

const FeedDetail = () => {
  return (
    <div>
      <Card>
        <CardHead>
          <Button>Feed</Button>
          <Button>Exercise</Button>
        </CardHead>
        <ul>
          <Item>
            <IconWrap>
              <FaBone size={25}/>
            </IconWrap>
          </Item>
        </ul>
      </Card>
    </div>
  )
}

export default FeedDetail