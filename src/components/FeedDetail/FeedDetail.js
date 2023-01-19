import styled from 'styled-components'
import { FaBone } from 'react-icons/fa'
import style from './FeedDetail.module.scss'
import classNames from "classnames/bind"
const cx = classNames.bind(style)

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
  padding: .5rem 2rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.primary};
  border-radius: .5rem;
  font-size: 1.3rem;
`

const List = styled.ul`
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const ItemContent = styled.span`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2rem;
  
  strong {
    font-size: 1.3rem;
  }
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

const FeedDetail = () => {
  return (
    <Card>
      <CardHead>
        <Button>Feed</Button>
        <Button>Exercise</Button>
      </CardHead>
      <List>
        <Item>
          <IconWrap>
            <FaBone size={25}/>
          </IconWrap>
          <ItemContent>
            <strong>
              2022-10-11
            </strong>
            <span>
              hayeong
            </span>
          </ItemContent>
        </Item>
      </List>
    </Card>
  )
}

export default FeedDetail