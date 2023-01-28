import styled, {ThemeContext} from 'styled-components'
import { FiChevronLeft, FiUser } from 'react-icons/fi'
import {FaFish} from "react-icons/fa"
import { GiCannedFish } from 'react-icons/gi'
import {IoWater} from "react-icons/io5"
import {useNavigate} from 'react-router-dom'
import Image from '../../../components/Common/Image'
import {useDispatch, useSelector} from 'react-redux'
import {
  handleAge,
  handleFeeding,
  handleWeight,
  handleStatus,
  handleSelectedCat
} from '../../../redux/feed'
import useParsedParams from "../../../hook/useParsedParams"
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../../../context/AuthContext'
import {catStatus} from '../../../database/cats'
import {StyledBadge} from '../../../components/Common/Badge'
import Button from "../../../components/Common/Button"
import Modal from "../../../components/Modal/Modal"

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

const ImageWrap = styled.div`
  position: relative;
  width: 30%;
  margin: 0 auto;
`

const Badge = styled(StyledBadge)`
  left: -3rem;
  width: 8rem;
  font-size: 1.4rem;
`

const CardTitle = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const CardDesc = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  li {
    width: 20%;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: ${props => props.theme.colors.bg};
    border-radius: 1rem;
  }
`

const FeedInfo = styled.div`
  margin: 1rem 0;
  p {
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const List = styled.ul`
  height: 26rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: .8rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.bg};
    border-radius: .5rem;
  }
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.bgDark};
  }
`

const ItemContent = styled.span`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2rem;
  
  strong {
    font-size: 1.3rem;
  }
  span {
    display: flex;
    gap: .5rem;
    align-items: center;
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
    top: -4.5rem;
    left: 2%;
    background-color: ${(props) => props.theme.colors.bgLight};
  }
`

const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  
  button {
    width: 30%;
    text-align: center;
    background: rgba(255, 255, 255, .5);
  }
  span {
    display: block;
    font-size: 1.2rem;
  }
`

const FeedDetail = () => {
  const params = useParsedParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const theme = useContext(ThemeContext)
  const cats = useSelector(state => state.feed.cats)
  const selectedCat = useSelector(state => state.feed.selectedCat)
  const {currentUser} = useContext(AuthContext)

  const [count, setCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  const feedCat = () => {
    let today = new Date().toLocaleString('en-US')
    if (selectedCat.status !== catStatus.status3) {
      setCount(count + 1)
      dispatch(handleFeeding({createdAt: today, createdBy: currentUser.loginId}))
    }
  }

  const handleModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    if (count > 0) {
      // 밥 2번 주면 체중 + 1
      if (count % 2 === 0) {
        dispatch(handleWeight())
      }
      // 밥 3번 주면 나이 + 1
      if (count % 3 === 0) {
        dispatch(handleAge())
      }
      // 체중에 따른 상태 변경
      dispatch(handleStatus())
    }
  }, [count])

  useEffect(() => {
    // 리스트에 해당하는 고양이 없으면 홈으로 이동
    if (cats.find(cat => Number(cat.id) === params)) {
      dispatch(handleSelectedCat(params))
    } else {
      navigate('/')
    }
  }, [])

  return (
    <Wrap>
      {selectedCat && Number(selectedCat.id) === params ? (
        <Card>
          <IconWrap className="top" onClick={() => navigate('/feed')}>
            <FiChevronLeft size={25} />
          </IconWrap>
          <div>
            <ImageWrap>
              <Badge status={selectedCat.status}>{selectedCat.status}</Badge>
              <Image src={selectedCat.profileImg} className='-image' radius="true" status={selectedCat.status}/>
            </ImageWrap>
            <CardTitle>
              {selectedCat.name}
            </CardTitle>
            {selectedCat.feeding.length > 0 ? (
              <FeedInfo>
                <p>first : {selectedCat.feeding[0].createdAt}</p>
                <p>last : {selectedCat.feeding[selectedCat.feeding.length -1].createdAt}</p>
              </FeedInfo>
            ) : null}
            <CardDesc>
              <li>{selectedCat.gender}</li>
              <li>{selectedCat.age}살</li>
              <li>{selectedCat.weight}kg</li>
            </CardDesc>
            <BtnWrap>
              {/*<Button onClick={feedCat} status={selectedCat.status} width="70%" bgColor="complementary">Feed</Button>*/}
              <Button
                width="70%"
                bgColor="complementary"
                onClick={handleModalVisible}>
                Feed</Button>
              <Button bgColor="analogous1">Exercise</Button>
            </BtnWrap>
          </div>
          <List>
            {selectedCat.feeding.length > 0 ? selectedCat.feeding.map((cat, i) => (
              <Item key={`${cat.createdAt}-${i}`}>
                <IconWrap>
                  <GiCannedFish size={25}/>
                </IconWrap>
                <ItemContent>
                  <strong>{cat.createdAt}</strong>
                  <span><FiUser size={15}/>{cat.createdBy}</span>
                </ItemContent>
              </Item>
            )) : null}
          </List>
        </Card>
      ) : null}
      <Modal visible={modalVisible} onClose={handleModalVisible}>
        <ModalContent>
          <Button>
            <FaFish size={25} />
            <span>Fish</span>
          </Button>
          <Button>
            <GiCannedFish size={25} />
            <span>Canned</span>
          </Button>
          <Button>
            <IoWater size={25} />
            <span>Water</span>
          </Button>
        </ModalContent>
      </Modal>
    </Wrap>
  )
}

export default FeedDetail