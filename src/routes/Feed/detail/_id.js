import styled from 'styled-components'
import {FiChevronLeft, FiUser} from 'react-icons/fi'
import {FaFish} from "react-icons/fa"
import {GiCannedFish} from 'react-icons/gi'
import {IoPaw, IoWater} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import {StyledImage} from '../../../components/Common/Image'
import {useSelector} from 'react-redux'
import useParsedParams from "../../../hook/useParsedParams"
import {useCallback, useEffect, useRef, useState} from 'react'
import {
  catFeedType,
  catStatus,
  catMessage,
  TIME_AGING, TIME_LOSE_WEIGHT, WEIGHT_FAT, WEIGHT_GONE, AGE_GONE
} from '../../../database/cats'
import {StyledBadge} from '../../../components/Common/Badge'
import Button from "../../../components/Common/Button"
import Modal from "../../../components/Modal/Modal"
import useInterval from "../../../hook/useInterval"
import useCat, {catStatusSelector, useCatTime} from '../store/useCat'
import {FeedWrap} from '../../../components/Feed/Wrap'
import {FeedCard} from '../../../components/Feed/Card'
import {TIME_EXERCISE, TIME_FEED, TIME_MSG} from '../../../database/cats'
import useDidMountEffect from '../../../hook/useDidMountEffect'
import {flushSync} from 'react-dom'
import {useRecoilValue} from 'recoil'

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`
const ImageWrap = styled.div`
  position: relative;
  width: 30%;
  padding: 5.5rem 0;
`

const Image = styled(StyledImage)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 2rem;
  border: .3rem solid ${(props) => props.theme.colors.text};
  object-fit: cover;
`

const Message = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  color: black;
  font-size: 1.1rem;
`

const Badge = styled(StyledBadge)`
  position: relative;
  top: 0;
  left: 0;
  width: 6rem;
  font-size: 1rem;
`

const CardTitle = styled.h1`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin: 2rem 0 1rem;
  font-size: 2.5rem;
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
  // ** Hooks
  const params = useParsedParams()
  const navigate = useNavigate()
  const listRef = useRef(null)

  // ** recoil
  const {cats, setCats, selectedCat, setSelectedCat} = useCat()
  const currentStatus = useRecoilValue(catStatusSelector)

  // ** store
  const currentUser = useSelector(state => state.auth.currentUser)

  // ** variables
  const currentTime = new Date().toLocaleString('en-US')

  // ** state
  const [feedModalVisible, setFeedModalVisible] = useState(false)
  const [feedBtnStatus, setFeedBtnStatus] = useState(false)
  const [exerciseBtnStatus, setExerciseBtnStatus] = useState(false)
  const [timeLimitToFeed, setTimeLimitToFeed] = useState(null)
  const [timeLimitToExercise, setTimeLimitToExercise] = useState(null)
  const [timeLimitToMsg, setTimeLimitToMsg] = useState(null)
  const [timeLimitToWeight, setTimeLimitToWeight] = useState(null)
  const [timeLimitToAging, setTimeLimitToAging] = useState(null)
  const [message, setMessage] = useState(`${currentUser.loginId} ${catMessage.m1}`)

  // 모달
  const handleFeedModalVisible = useCallback(() => {
    setFeedModalVisible(!feedModalVisible)
  }, [feedModalVisible])

  // 메세지
  const handleMessage = useCallback((msg, time) => {
    time ? setTimeLimitToMsg(time) : setTimeLimitToMsg(TIME_MSG)
    setMessage(msg)
  }, [timeLimitToMsg, message])

  // 상태
  const handleStatus = () => {
    setSelectedCat((selectedCat) => {
      return {
        ...selectedCat,
        status: selectedCat.weight >= WEIGHT_FAT && selectedCat.weight < WEIGHT_GONE
          ? catStatus.status2
          : (selectedCat.weight >= WEIGHT_GONE || selectedCat.age >= AGE_GONE || ((selectedCat.weight / selectedCat.age) * 100) < 10
            ? catStatus.status3
            : catStatus.status1)
      }
    })
  }

  // 나이
  const handleAge = () => {
    setSelectedCat((selectedCat) => {
      return {...selectedCat, age: selectedCat.age + 1}
    })
    setTimeLimitToAging(TIME_AGING) // 나이 타이머 시작-!
    handleMessage(catMessage.m7) // 나이 메세지
    handleStatus() // 상태 체크
  }

  // 몸무게
  const handleUpdateWeight = (weight) => {
    setSelectedCat((selectedCat) => {
        return {...selectedCat, weight: Math.round((selectedCat.weight + weight) * 10) / 10}
    })
    handleStatus() // 상태 체크
  }

  // 타입별 몸무게 체크
  const handleWeightByType = (type) => {
    if (type === catFeedType.feed1) {
      handleUpdateWeight(3)
    } else if (type === catFeedType.feed2) {
      handleUpdateWeight(1)
    } else if (type === catFeedType.feed3) {
      handleUpdateWeight(0.1)
    } else {
      handleUpdateWeight(-1) // 일정시간 방치되었을 경우 체중 -1
    }
    setTimeLimitToWeight(TIME_LOSE_WEIGHT) // 체중 lose 타이머 start!
  }

  // 리스트 추가될 때 스크롤
  const handleScrollView = useCallback(() => {
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }, [listRef])

  const handleExercise = () => {
    setExerciseBtnStatus(true) // 운동 버튼 상태 비활성화
    setFeedBtnStatus(true) // Feed 버튼 상태 비활성화
    setTimeLimitToExercise(TIME_EXERCISE)  // 10초 타이머 시작-!
    handleMessage(catMessage.m4, TIME_EXERCISE) // 메세지
    // 운동기록하기
    flushSync(() => {
      setSelectedCat((selectedCat) => {
        return {...selectedCat,
          recordList: [...selectedCat.recordList, {type: catStatus.status4, createdAt: currentTime, createdBy: currentUser.loginId}]}
      })
    })
    handleScrollView()
  }

  const feedCatByType = (type) => {
    const currentCat = {
      ...selectedCat,
      recordList: [...selectedCat.recordList, {type: type, createdAt: currentTime, createdBy: currentUser.loginId}]
    }
    const feedCount = currentCat.recordList.filter(record => {
      return record.type !== catStatus.status4
    }).length

    flushSync(() => {
      setSelectedCat(currentCat)
    })
    if (feedCount !== 0 && feedCount % 3 === 0) {
      handleAge() // 나이 체크
    } else {
      handleMessage(catMessage.m3) // 밥 메세지
    }
    handleWeightByType(type) // 타입별 몸무게 체크
    handleScrollView()
  }

  const handleRandomFeedCat = (feedType) => {
    let randomBoolean = Math.random() < 0.5

    if (randomBoolean && selectedCat.status !== catStatus.status3) {
      feedCatByType(feedType) // 밥 먹이기
    } else {
      // 안먹으면 랜덤시간 동안 버튼 비활성화
      setTimeLimitToFeed(TIME_FEED)
      setFeedBtnStatus(true)
      handleMessage(catMessage.m2, TIME_FEED)
    }
    handleFeedModalVisible()
  }

  // 메세지 타이머
  useInterval(() => {
    setTimeLimitToMsg(timeLimitToMsg => (timeLimitToMsg - 1))

    if (timeLimitToMsg === 1) {
      if (currentStatus !== catStatus.status3) {
        setMessage(catMessage.m10) // 기본 메세지
      } else {
        setMessage(catMessage.m6) // 마지막 default 메세지...
      }
    }
  }, timeLimitToMsg ? 1000 : null)

  // 몸무게 타이머
  useInterval(() => {
    setTimeLimitToWeight(timeLimitToWeight => (timeLimitToWeight - 1))

    if (timeLimitToWeight === 1) {
      handleWeightByType() // 체중 -1
    }
  }, timeLimitToWeight ? 1000 : null)

  // 나이 타이머
  useInterval(() => {
    setTimeLimitToAging(timeLimitToAging => (timeLimitToAging - 1))

    if (timeLimitToAging === 1) {
      handleAge() // 나이 + 1
    }
  }, timeLimitToAging ? 1000 : null)

  // 운동 타이머
  useInterval(() => {
    setTimeLimitToExercise(timeLimitToExercise => (timeLimitToExercise - 1))
    // timeLimit 시간 끝나면
    if (timeLimitToExercise === 1) {
      handleUpdateWeight(-2) // 운동 후 -2kg
      handleMessage(catMessage.m9) // 메세지
      setExerciseBtnStatus(false)
      setFeedBtnStatus(false)
    }
  }, timeLimitToExercise ? 1000 : null)

  // 밥 안먹는 시간
  useInterval(() => {
    setTimeLimitToFeed(timeLimitToFeed => (timeLimitToFeed - 1))
    // timeLimit 시간 끝나면 다시 Feed버튼 활성화
    if (timeLimitToFeed === 1) {
      if (timeLimitToExercise > 0) { // 운동 시간 안지났으면 비활성화
        setFeedBtnStatus(true)
      } else {
        setFeedBtnStatus(false)
      }
    }
  }, timeLimitToFeed ? 1000 : null)

  // 상태 변화에 따른 메세지 핸들링
  useDidMountEffect(() => {
    if (currentStatus === catStatus.status2) {
      handleMessage(catMessage.m5)
    } else if (currentStatus === catStatus.status3) {
      handleMessage(catMessage.m6)
    }
  }, [currentStatus])

  useEffect(() => {
    if (selectedCat) {
      let updatedCats = cats.map(cat => {
        return cat.id === selectedCat.id ? {...selectedCat} : cat
      })
      setCats(updatedCats)
    } // cats update
  }, [selectedCat])

  useEffect(() => {
    // 리스트에 해당하는 고양이 없으면 홈으로 이동
    const current = cats.find(cat => Number(cat.id) === params)
    if (current) {
      setSelectedCat(current)
    } else {
      navigate('/')
    }
  }, [])

  return (
    <FeedWrap>
      {selectedCat && Number(selectedCat.id) === params ? (
        <FeedCard>
          <IconWrap className="top" onClick={() => navigate('/feed')}>
            <FiChevronLeft size={25}/>
          </IconWrap>
          <div>
            <CardHeader>
              <ImageWrap>
                <Image src={selectedCat.profileImg} className='-image' status={selectedCat.status}/>
              </ImageWrap>
              <Message>💭 {message}</Message>
            </CardHeader>
            <CardTitle><span>{selectedCat.name}</span><Badge status={selectedCat.status}>{selectedCat.status}</Badge></CardTitle>
            {selectedCat.recordList.length > 0 ? (
              <FeedInfo>
                <p>fist : {selectedCat.recordList[0].createdAt}</p>
                <p>last : {selectedCat.recordList[selectedCat.recordList.length - 1].createdAt}</p>
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
                onClick={() => handleFeedModalVisible()}>
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

          <List ref={listRef}>
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
        </FeedCard>
      ) : null}

      <Modal visible={feedModalVisible} onClose={handleFeedModalVisible}>
        <ModalContent>
          <Button onClick={() => handleRandomFeedCat(catFeedType.feed1)}>
            <FaFish size={25}/>
            <span>{catFeedType.feed1}</span>
          </Button>
          <Button onClick={() => handleRandomFeedCat(catFeedType.feed2)}>
            <GiCannedFish size={25}/>
            <span>{catFeedType.feed2}</span>
          </Button>
          <Button onClick={() => handleRandomFeedCat(catFeedType.feed3)}>
            <IoWater size={25}/>
            <span>{catFeedType.feed3}</span>
          </Button>
        </ModalContent>
      </Modal>

    </FeedWrap>
  )
}

export default FeedDetail