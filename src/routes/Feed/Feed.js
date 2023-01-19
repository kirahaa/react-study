import FeedList from '../../components/FeedList/FeedList'
import styled from 'styled-components'
import FeedDetail from './Detail/FeedDetail'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const Card = styled.div`
  display: flex;
`

const Feed = () => {
  const navigate = useNavigate()
  const handleToggleDetail = (id) => {
    navigate(`${id}`)
  }

  return (
    <Wrap>
      <Card>
        <FeedList handleToggleDetail={handleToggleDetail}/>
      </Card>
    </Wrap>
  )
}

export default Feed