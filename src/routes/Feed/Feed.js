import FeedList from '../../components/FeedList/FeedList'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const Feed = () => {
  return (
    <Wrap>
      <FeedList />
    </Wrap>
  )
}

export default Feed