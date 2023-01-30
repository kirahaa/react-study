import styled from 'styled-components'
import {FiChevronLeft, FiUser} from 'react-icons/fi'
import {FaFish} from "react-icons/fa"
import {GiCannedFish} from 'react-icons/gi'
import {IoPaw, IoWater} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import Image from '../../../components/Common/Image'
import {useDispatch, useSelector} from 'react-redux'
import {
  handleAge,
  handleRecordList,
  handleWeight,
  handleStatus,
  handleSelectedCat, handleFeedCount
} from '../../../redux/feed'
import useParsedParams from "../../../hook/useParsedParams"
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../../../context/AuthContext'
import {catFeedType, catStatus} from '../../../database/cats'
import {StyledBadge} from '../../../components/Common/Badge'
import Button from "../../../components/Common/Button"
import Modal from "../../../components/Modal/Modal"
import useInterval from "../../../hook/useInterval"
import useDidMountEffect from '../../../hook/useDidMountEffect'

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

  const today = new Date().toLocaleString('en-US')
  const feedCount = selectedCat ? selectedCat.feedCount : 0
  const [feedModalVisible, setFeedModalVisible] = useState(false)
  const [feedBtnStatus, setFeedBtnStatus] = useState(false)
  const [exerciseBtnStatus, setExerciseBtnStatus] = useState(false)
  const [timeLimitToFeed, setTimeLimitToFeed] = useState(null)
  const [timeLimitToExercise, setTimeLimitToExercise] = useState(null)

  const handleFeedModalVisible = () => {
    setFeedModalVisible(!feedModalVisible)
  }

  const handleExercise = () => {
    if (selectedCat.weight > 2) {
      setExerciseBtnStatus(true) // 운동 버튼 상태 비활성화
      setFeedBtnStatus(true) // Feed 버튼 상태 비활성화
      setTimeLimitToExercise(10)  // 10초 타이머 시작-!
      dispatch(handleRecordList({type: catStatus.status4, createdAt: today, createdBy: currentUser.loginId})) // 운동 기록
    } else {
      alert('고양이가 너무 작아 운동을 시킬 수 없습니다ㅜㅜ \n2kg 이상부터 운동이 가능하니, 먼저 밥을 먹여주세요!')
    }
  }

  const handleRandomFeedBtn = () => {
    let randomBoolean = Math.random() < 0.5
    let randomNumber = Math.floor(Math.random() * 9) + 2 // 2초 ~ 10초까지 랜덤하게

    // 랜덤으로 밥 먹을지 안먹을지
    if (randomBoolean) {
      handleFeedModalVisible()
    } else {
      // 안먹으면 랜덤시간 동안 버튼 비활성화
      setTimeLimitToFeed(randomNumber)
      setFeedBtnStatus(true)
    }
  }

  const handleFeedCat = (feedType) => {
    if (selectedCat.status !== catStatus.status3) {
      dispatch(handleFeedCount()) // 먹이 준 횟수
      dispatch(handleRecordList({type: feedType, createdAt: today, createdBy: currentUser.loginId}))

      // feedType에 따른 몸무게 증가
      if (feedType === catFeedType.feed1) {
        dispatch(handleWeight(3)) // + 3kg
      } else if (feedType === catFeedType.feed2) {
        dispatch(handleWeight(1)) // + 1kg
      } else {
        dispatch(handleWeight(0.1)) // + 0.1kg
      }
      handleFeedModalVisible()
    }
  }

  // 운동 타이머
  useInterval(() => {
    setTimeLimitToExercise(timeLimitToExercise => (timeLimitToExercise - 1))

    if (timeLimitToExercise === 1) { // timeLimit 시간 끝나면
      dispatch(handleWeight(-2)) // 운동 후 -2kg
      setExerciseBtnStatus(false)
      setFeedBtnStatus(false)
      dispatch(handleStatus()) // 상태 체크
    }
  }, timeLimitToExercise ? 1000 : null)

  // 밥 안먹는 시간
  useInterval(() => {
    setTimeLimitToFeed(timeLimitToFeed => (timeLimitToFeed - 1))
    // timeLimit 시간 끝나면 다시 Feed버튼 활성화
    if (timeLimitToFeed === 1) {
      setFeedBtnStatus(false)
    }
  }, timeLimitToFeed ? 1000 : null)

  useDidMountEffect(() => {
    // 밥 3번 주면 나이 + 1
    if (feedCount !== 0 && feedCount % 3 === 0) {
      dispatch(handleAge())
    }
    dispatch(handleStatus()) // 상태 체크
  }, [feedCount])

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
            {selectedCat.recordList.length > 0 ? (
              <FeedInfo>
                <p>first : {selectedCat.recordList[selectedCat.recordList.length - 1].createdAt}</p>
                <p>last : {selectedCat.recordList[0].createdAt}</p>
              </FeedInfo>
            ) : null}
            <CardDesc>
              <li>{selectedCat.gender}</li>
              <li>{selectedCat.age}살</li>
              <li>{selectedCat.weight}kg</li>
            </CardDesc>
            <BtnWrap>
              <Button
                width="59%"
                bgColor="complementary"
                disabled={feedBtnStatus || selectedCat.status === catStatus.status3}
                onClick={handleRandomFeedBtn}>
                {timeLimitToFeed ? `I don't want to eat for ${timeLimitToFeed}s` : 'Feed'}
              </Button>
              <Button
                width="38%"
                bgColor="analogous1"
                disabled={exerciseBtnStatus || selectedCat.status === catStatus.status3}
                onClick={handleExercise}>
                {timeLimitToExercise ? `Exercising... ${timeLimitToExercise}` : 'Exercise'}
              </Button>
            </BtnWrap>
          </div>

          <List>
            {selectedCat.recordList.length > 0 ? selectedCat.recordList.map((cat, i) => (
              <Item key={`${cat.createdAt}-${i}`}>
                <IconWrap>
                  {cat.type === catFeedType.feed1
                    ? (<FaFish size={20}/>)
                    : (
                      cat.type === catFeedType.feed2
                        ? (<GiCannedFish size={20}/>)
                        : (
                          cat.type === catFeedType.feed3
                          ? (<IoWater size={20}/>)
                          : (<IoPaw size={20}/>)
                        )
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

      <Modal visible={feedModalVisible} onClose={handleFeedModalVisible}>
        <ModalContent>
          <Button onClick={() => handleFeedCat(catFeedType.feed1)}>
            <FaFish size={25}/>
            <span>{catFeedType.feed1}</span>
          </Button>
          <Button onClick={() => handleFeedCat(catFeedType.feed2)}>
            <GiCannedFish size={25}/>
            <span>{catFeedType.feed2}</span>
          </Button>
          <Button onClick={() => handleFeedCat(catFeedType.feed3)}>
            <IoWater size={25}/>
            <span>{catFeedType.feed3}</span>
          </Button>
        </ModalContent>
      </Modal>

    </Wrap>
  )
}

export default FeedDetail