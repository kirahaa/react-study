import FeedList from '../../components/FeedList/FeedList'
import styled from 'styled-components'
import FeedDetail from '../../components/FeedDetail/FeedDetail'

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
  return (
    <Wrap>
      <Card>
        <FeedList />
        <FeedDetail />
      </Card>
    </Wrap>
  )
}

export default Feed