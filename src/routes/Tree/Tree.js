import {useState} from 'react'
import TreeChild from '../../components/TreeChild/TreeChild'
import styled from 'styled-components'

const StyledTree = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 4rem auto;
  padding: 1rem;
  gap: 1.4rem;
  background-color: #eeeeee;
  cursor: pointer;
`
const defaultValue = {
  data: false,
  data2: false,
  data3: false
}

const Tree = () => {
  const [datas, setDatas] = useState(defaultValue)

  return (
    <>
      <StyledTree onClick={() => setDatas({data: !datas.data})}>
        <TreeChild data={datas.data} />
        <TreeChild data={datas.data} />
        <TreeChild data={datas.data} />
        <TreeChild data={datas.data} />
      </StyledTree>

      <StyledTree onClick={() => setDatas({data2: !datas.data2})}>
        <TreeChild data2={datas.data2} />
        <TreeChild data2={datas.data2} />
      </StyledTree>

      <StyledTree onClick={() => setDatas({data3: !datas.data3})}>
        <TreeChild data3={datas.data3} />
        <TreeChild data3={datas.data3} />
        <TreeChild data3={datas.data3} />
      </StyledTree>
    </>
  )
}

export default Tree