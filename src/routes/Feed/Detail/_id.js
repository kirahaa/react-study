import styled from 'styled-components'
import {FiChevronLeft, FiUser} from 'react-icons/fi'
import {FaFish} from "react-icons/fa"
import {GiCannedFish} from 'react-icons/gi'
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
import {catFeedType, catStatus} from '../../../database/cats'
import {StyledBadge} from '../../../components/Common/Badge'
import Button from "../../../components/Common/Button"
import Modal from "../../../components/Modal/Modal"
import useInterval from "../../../hook/useInterval"

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
  height: 20rem;
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

  const cats = useSelector(state => state.feed.cats)
  const selectedCat = useSelector(state => state.feed.selectedCat)
  const {currentUser} = useContext(AuthContext)

  const [feedCount, setFeedCount] = useState(0)
  const [selectedFeedType, setSelectedFeedType] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [feedBtnStatus, setFeedBtnStatus] = useState(false)
  const [timeLimitToFeed, setTimeLimitToFeed] = useState(null)

  const handleModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  const handleFeedBtn = () => {
    let randomBoolean = Math.random() < 0.5
    let randomNumber = Math.floor(Math.random() * 9) + 2 // 2초 ~ 10초까지 랜덤하게

    // 랜덤으로 밥 먹을지 안먹을지
    if (randomBoolean) {
      handleModalVisible()
    } else {
      // 안먹으면 랜덤시간 동안 버튼 비활성화
      setTimeLimitToFeed(randomNumber)
      setFeedBtnStatus(true)
    }
  }

  const feedCat = (catFeedType) => {
    let today = new Date().toLocaleString('en-US')

    if (selectedCat.status !== catStatus.status3) {
      setFeedCount(feedCount + 1)
      setSelectedFeedType(catFeedType)
      dispatch(handleFeeding({feedType: catFeedType, createdAt: today, createdBy: currentUser.loginId}))
    }
    handleModalVisible()
  }

  // 밥 안먹는 시간
  useInterval(() => {
    setTimeLimitToFeed(timeLimitToFeed => (timeLimitToFeed - 1))
    // timeLimit 시간 끝나면 다시 Feed버튼 활성화
    if (timeLimitToFeed === 1) {
      setFeedBtnStatus(false)
    }
  }, timeLimitToFeed ? 1000 : null)

  useEffect(() => {
    if (feedCount > 0 && selectedFeedType) {
      // feedType에 따른 몸무게 증가
      if (selectedFeedType === catFeedType.feed1) {
        dispatch(handleWeight(3)) // + 3kg
      } else if (selectedFeedType === catFeedType.feed2) {
        dispatch(handleWeight(1)) // + 1kg
      } else {
        dispatch(handleWeight(0.1)) // + 0.1kg
      }
      // 밥 3번 주면 나이 + 1
      if (feedCount % 3 === 0) {
        dispatch(handleAge())
      }
      // 체중에 따른 상태 변경
      dispatch(handleStatus())
    }
  }, [feedCount, selectedFeedType])

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
            <FiChevronLeft size={25}/>
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
                <p>first : {selectedCat.feeding[selectedCat.feeding.length - 1].createdAt}</p>
                <p>last : {selectedCat.feeding[0].createdAt}</p>
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
                onClick={handleFeedBtn}
                disabled={feedBtnStatus}>
                {timeLimitToFeed ? `I don't want to eat for ${timeLimitToFeed}s` : 'Feed'}</Button>
              <Button bgColor="analogous1">Exercise</Button>
            </BtnWrap>
          </div>
          <List>
            {selectedCat.feeding.length > 0 ? selectedCat.feeding.map((cat, i) => (
              <Item key={`${cat.createdAt}-${i}`}>
                <IconWrap>
                  {cat.feedType === catFeedType.feed1
                    ? (<FaFish size={20}/>)
                    : (
                      cat.feedType === catFeedType.feed2
                        ? (<GiCannedFish size={20}/>)
                        : (<IoWater size={20}/>)
                    )
                  }
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
          <Button onClick={() => feedCat(catFeedType.feed1)}>
            <FaFish size={25}/>
            <span>{catFeedType.feed1}</span>
          </Button>
          <Button onClick={() => feedCat(catFeedType.feed2)}>
            <GiCannedFish size={25}/>
            <span>{catFeedType.feed2}</span>
          </Button>
          <Button onClick={() => feedCat(catFeedType.feed3)}>
            <IoWater size={25}/>
            <span>{catFeedType.feed3}</span>
          </Button>
        </ModalContent>
      </Modal>

    </Wrap>
  )
}

export default FeedDetail