import styled from 'styled-components'
import { FaBone } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import style from './FeedDetail.module.scss'
import classNames from "classnames/bind"
import {useNavigate} from 'react-router-dom'
import Image from '../../../components/Common/Image'
const cx = classNames.bind(style)

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  width: 100%;
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.colors.bgLight};
`

const CardHead = styled.div`
  
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Button = styled.button`
  width: 10rem;
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
  
  &.top {
    position: absolute;
    top: -30%;
    left: 2%;
    background-color: ${(props) => props.theme.colors.bgLight};
  }
`

const FeedDetail = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      <Card>
        <IconWrap className="top" onClick={() => navigate('/feed')}>
          <FiChevronLeft size={25} />
        </IconWrap>
        <CardHead>
          {/* TODO:: 유저데이터 연결 */}
          <Image/>
          <BtnWrap>
            <Button>Feed</Button>
            <Button>Exercise</Button>
          </BtnWrap>
        </CardHead>
        <List>
          <Item>
            <IconWrap>
              <FaBone size={25}/>
            </IconWrap>
            <ItemContent>
              <strong>2022-10-11</strong>
              <span>hayeong</span>
            </ItemContent>
          </Item>
        </List>
      </Card>
    </Wrap>
  )
}

export default FeedDetail