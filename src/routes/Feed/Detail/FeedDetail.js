import styled from 'styled-components'
import { FaBone } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import {useNavigate} from 'react-router-dom'
import Image from '../../../components/Common/Image'
import {useDispatch, useSelector} from 'react-redux'
import {handleAge, handleFeeding, handleWeight} from '../../../redux/feed'
import useParsedParams from "../../../hook/useParsedParams"
import {useEffect, useState} from "react"

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

const ImageWrap = styled.div`
  position: relative;
  width: 30%;
  margin: 0 auto;
`

const StyledBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: -3rem;
  width: 8rem;
  padding: .5rem 1rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
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
    padding: .5rem;
    text-align: center;
    font-size: 1.3rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 1rem;
  }
`

const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const Button = styled.button`
  width: 100%;
  padding: .5rem 2rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.primary};
  border-radius: .5rem;
  font-size: 1.3rem;
`

const List = styled.ul`
  max-height: 26rem;
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
    top: -4.5rem;
    left: 2%;
    background-color: ${(props) => props.theme.colors.bgLight};
  }
`

const FeedDetail = () => {
  const params = useParsedParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cats = useSelector(state => state.feed.cats)
  const [count, setCount] = useState(0)

  const feedCat = () => {
    // FIXME:: 왜 함수안에서 useState 부르면 에러가 날까..?
    // 그리고 state가 바로 업데이트 안됨...
    let today = new Date().toLocaleString('en-US')
    setCount(count + 1)

    dispatch(handleFeeding({createdAt: today, createdBy: 'hayeong'}))
  }

  useEffect(() => {
    // TODO:: 카운트 다시 확인
    if (count === 2) {
      dispatch(handleWeight())
    } else if (count === 3) {
      dispatch(handleAge())
      setCount(0)
    }
  }, [count])

  return (
    <Wrap>
      <Card>
        <IconWrap className="top" onClick={() => navigate('/feed')}>
          <FiChevronLeft size={25} />
        </IconWrap>
        <CardHead>
          <ImageWrap>
            <StyledBadge status={cats[params].status}>{cats[params].status}</StyledBadge>
            <Image src={cats[params].profileImg} className='-image' radius="true"/>
          </ImageWrap>
          <CardTitle>
            {cats[params].name}
          </CardTitle>
          <CardDesc>
            <li>{cats[params].gender}</li>
            <li>{cats[params].age}살</li>
            <li>{cats[params].weight}kg</li>
          </CardDesc>
          <BtnWrap>
            <Button onClick={feedCat}>Feed</Button>
          </BtnWrap>
        </CardHead>
        <List>
          {cats[params].feeding.length > 0 ? cats[params].feeding.map((cat, i) => (
            <Item key={`${cat.createdAt}-${i}`}>
              <IconWrap>
                <FaBone size={25}/>
              </IconWrap>
              <ItemContent>
                <strong>{cat.createdAt}</strong>
                <span>{cat.createdBy}</span>
              </ItemContent>
            </Item>
          )) : null}
        </List>
      </Card>
    </Wrap>
  )
}

export default FeedDetail