import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {StyledImage} from '../../components/Common/Image'
import {catStatus} from '../../database/cats'
import {StyledBadge} from '../../components/Common/Badge'
import useCat from './store/useCat'
import Button from '../../components/Common/Button'
import {FeedWrap} from '../../components/Feed/Wrap'
import {FeedCard} from '../../components/Feed/Card'
import {FiTrash2, FiFrown} from 'react-icons/fi'

const Card = styled(FeedCard)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const List = styled.ul`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 50rem;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: .8rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.bg};
    border-radius: .5rem;
  }
`

const ImageWrap = styled.div`
  position: relative;
  width: 30%;
  padding: 4.5rem 0;
`

const Image = styled(StyledImage)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
`

const Badge = styled(StyledBadge)`
  z-index: 1;
`

const Item = styled.li`
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
    
    button {
      display: block;
      background-color: ${(props) => props.theme.colors.bgLight};
    }
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

const DeleteBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1rem;
  height: fit-content;
  margin: auto 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.bgDark};
  border-radius: 50%;
  line-height: 0;
`

const NoData = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.4rem;
  p {
    padding: 1rem 0;
  }
`

const Feed = () => {
  const navigate = useNavigate()
  const {cats, setCats} = useCat()

  const handleToggleDetail = (id) => {
    const currentCat = cats.find(cat => cat.id === id)
    if (currentCat.status !== catStatus.status3) {
      navigate(`${id}`)
    }
  }

  const handleDelete = (e, id) => {
    e.stopPropagation()
    if (window.confirm('해당 고양이를 지우시겠습니까?')) {
      const filteredCats = cats.filter((cat) => cat.id !== id)
      setCats(filteredCats)
    }
  }

  const goCatForm = () => {
    navigate('new')
  }

  return (
    <FeedWrap>
      <Card>
        <List>
          {
            cats.length > 0 ? (cats.map(cat => (
              <Item key={`cat-list-${cat.id}`} status={cat.status} onClick={() => handleToggleDetail(cat.id)}>
                <ImageWrap>
                  <Badge status={cat.status}>{cat.status}</Badge>
                  <Image src={cat.profileImg} className='-image' radius="true" status={cat.status}/>
                </ImageWrap>
                <ItemInfo>
                  <h2>{cat.name}</h2>
                  <p>age: {cat.age}살</p>
                  <p>weight: {cat.weight}kg</p>
                </ItemInfo>
                <DeleteBtn onClick={(e) => handleDelete(e, cat.id)}>
                  <FiTrash2 size={16}/>
                </DeleteBtn>
              </Item>
            ))) : <NoData>
              <FiFrown size={25}/>
              <p>No cats available</p>
            </NoData>
          }
        </List>
        <Button bgColor="primary" onClick={goCatForm}>Add Cat</Button>
      </Card>
    </FeedWrap>
  )
}

export default Feed