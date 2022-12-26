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

const Tree = () => {
  const [data, setData] = useState(false)
  const [data2, setData2] = useState(false)
  const [data3, setData3] = useState(false)

  return (
    <>
      <StyledTree onClick={() => setData(!data)}>
        <TreeChild data={data} setData={setData} />
        <TreeChild data={data} setData={setData} />
        <TreeChild data={data} setData={setData} />
        <TreeChild data={data} setData={setData} />
      </StyledTree>

      <StyledTree onClick={() => setData2(!data2)}>
        <TreeChild data2={data2} setData2={setData2} />
        <TreeChild data2={data2} setData2={setData2} />
      </StyledTree>

      <StyledTree onClick={() => setData3(!data3)}>
        <TreeChild data3={data3} />
        <TreeChild data3={data3} />
        <TreeChild data3={data3} />
      </StyledTree>
    </>
  )
}

export default Tree