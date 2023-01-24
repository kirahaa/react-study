import styled from 'styled-components'
import { FaBone } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import style from './FeedDetail.module.scss'
import classNames from "classnames/bind"
import {useNavigate, useParams} from 'react-router-dom'
import Image from '../../../components/Common/Image'
import {useDispatch, useSelector} from 'react-redux'
import {handleChangeFeeding, handleFeeding} from '../../../redux/feed'
import {useEffect, useState} from 'react'
import useParsedParams from "../../../hook/useParsedParams";
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
  max-height: 31rem;
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
  const selectedCat = useSelector(state => state.feed.selectedCat)

  const [feeding, setFeeding] = useState([])

  const feed = val => dispatch(handleFeeding(val))

  const feedCat = () => {
    let today = new Date().toLocaleString('en-US')

    setFeeding([...feeding, {createdAt: today, createdBy: 'hayeong'}])

    feed(feeding)
  }

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
            <Button onClick={feedCat}>Feed</Button>
            <Button>Exercise</Button>
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