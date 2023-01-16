import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

const Layout = styled.div`
  padding: 6rem 0 0;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const MainLayout = () => {
  return (
    <Layout className="layout">
      <Outlet/>
    </Layout>
  )
}

export default MainLayout