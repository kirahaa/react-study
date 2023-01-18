import {catData} from '../../utility/cat'
import styled from 'styled-components'
import Image from '../Common/Image'
import style from './FeedList.module.scss'
import classNames from 'classnames/bind'
import FeedDetail from '../FeedDetail/FeedDetail'
const cx = classNames.bind(style)

const Wrap = styled.div`
  display: flex;
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.colors.bgLight};
`

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;
`

const ImageWrap = styled.div`
  position: relative;
  width: 30%;
`

const Item = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;
  padding: 2.5rem 3rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.bgDark};
  }
  
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ebe9f1;
    opacity: .2;
  }
`

const StyledBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  padding: .5rem 1rem;
  border-radius: 1rem;
  background-color: ${ props => {
    if (props.status === 'normal') return "rgba(40, 199, 111, .22)"
    else if (props.status === 'fat') return "rgba(255, 159, 67, .22)"
    else return 'rgba(168, 170, 174, .22)'
  }};
  color: ${props => {
    if (props.status === 'normal') return '#28C768'
    else if (props.status === 'fat') return '#FF9F43'
    else return '#A8AAAE'
  }};
  font-size: 1.2rem;
  font-weight: bold;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    font-size: 1.9rem;
    font-weight: bold;
    margin: 1.2rem 0;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: .8rem;
  }
`

const FeedList = () => {

  return (
    <Wrap>
      <Card>
        {
          catData.map((cat) => (
            <Item key={cat.id}>
              <ImageWrap>
                <StyledBadge status={cat.status}>{cat.status}</StyledBadge>
                <Image src={require('../../assets/images/' + cat.profileImg)} className='-image' radius="true"/>
              </ImageWrap>
              <ItemInfo>
                <h2>{cat.name}</h2>
                <p>age: {cat.age}살</p>
                <p>weight: {cat.weight}kg</p>
              </ItemInfo>
            </Item>
          ))
        }
      </Card>
      <FeedDetail />
    </Wrap>
  )
}

export default FeedList