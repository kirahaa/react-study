import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import Image from '../../components/Common/Image'
import {useSelector} from 'react-redux'
import {catStatus} from '../../database/cats'
import Badge from '../../components/Common/Badge'

const FeedWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const FeedCard = styled.div`
  display: flex;
`

const Wrap = styled.div`
  display: flex;
  max-width: 45rem;
  width: 100%;
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.colors.bgLight};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

const ImageWrap = styled.div`
  position: relative;
  width: 30%;
`

const Item = styled.button`
  display: flex;
  gap: 2rem;
  position: relative;
  padding: 2.5rem 3rem;
  opacity: ${(props) => {
    if (props.status === catStatus.status3) return .3
    else return 1
  }};

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

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
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

const Feed = () => {
  const navigate = useNavigate()
  const cats = useSelector(state => state.feed.cats)

  const handleToggleDetail = (id) => {
    if (cats[Number(id)].status !== catStatus.status3) {
      navigate(`${id}`)
    }
  }

  return (
    <FeedWrap>
      <FeedCard>
        <Wrap>
          <Card>
            {
              cats.map((cat) => (
                <Item key={cat.id} status={cat.status} onClick={() => handleToggleDetail(cat.id)}>
                  <ImageWrap>
                    <Badge status={cat.status}>{cat.status}</Badge>
                    <Image src={cat.profileImg} className='-image' radius="true" status={cat.status}/>
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
        </Wrap>
      </FeedCard>
    </FeedWrap>
  )
}

export default Feed