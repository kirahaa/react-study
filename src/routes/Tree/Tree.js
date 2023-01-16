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
  background-color: ${(props) => props.theme.colors.bg};
`

const Tree = () => {
  const [group1, setGroup1] = useState(false)
  const [group2, setGroup2] = useState(false)
  const [group3, setGroup3] = useState(false)

  return (
    <Wrap>
      <StyledTree>
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
      </StyledTree>

      <StyledTree>
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#826bf8" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#826bf8" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#826bf8" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#826bf8" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#826bf8" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#826bf8" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#826bf8" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#826bf8" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#fdd835" />
      </StyledTree>

      <StyledTree>
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#ffa1a1" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#ffa1a1" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#ffa1a1" />
        <TreeChild isLight={group2} setIsLight={setGroup2} color="#ffa1a1" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#ffa1a1" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#ffa1a1" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#ffa1a1" />
        <TreeChild isLight={group3} setIsLight={setGroup3} color="#ffa1a1" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
        <TreeChild isLight={group1} setIsLight={setGroup1} color="#fdd835" />
      </StyledTree>
    </Wrap>
  )
}

export default Tree