import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import useCatTimer from '../../hook/useCatTimer'
import useCat from '../../routes/Feed/store/useCat'

const Layout = styled.div`
  padding: 6rem 0 0;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bg};
`

const MainLayout = () => {
  const {setCats} = useCat()

  useCatTimer((currentCat) => {
    setCats(currentCat)
  }, 60000)

  return (
    <Layout className="layout">
      <Outlet/>
    </Layout>
  )
}

export default MainLayout