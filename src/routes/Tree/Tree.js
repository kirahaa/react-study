import {useState} from 'react'
import TreeChild from '../../components/TreeChild/TreeChild'
import styled from 'styled-components'

const StyledTree = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  padding: 1rem;
  gap: 1.4rem;
  cursor: pointer;
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
`

const Tree = () => {
  const [group1, setGroup1] = useState(false)
  const [group2, setGroup2] = useState(false)
  const [group3, setGroup3] = useState(false)

  return (
    <Wrap>
      <StyledTree>
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
      </StyledTree>

      <StyledTree>
        <TreeChild isLight={group2} setIsLight={setGroup2} color="blue" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="blue" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="blue" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="blue" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="blue" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="blue" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="blue" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="blue" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="green" />
      </StyledTree>

      <StyledTree>
        <TreeChild isLight={group3} setIsLight={setGroup3} color="pink" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="pink" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="pink" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="pink" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="pink" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="pink" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="pink" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="pink" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="green" />
      </StyledTree>
    </Wrap>
  )
}

export default Tree