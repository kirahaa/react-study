import styled from 'styled-components'
import {FiX} from "react-icons/fi";

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: -1;
`

const ModalContents = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.bgDark};
  padding: 3.6rem;
  border-radius: 0.3rem;
`

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
`

const Modal = ({visible, onClose, children}) => {
  if (!visible) return null

  return (
    <StyledModal>
      <ModalContents>
        <ModalCloseBtn onClick={onClose}>
          <FiX size={20}/>
        </ModalCloseBtn>
        {children}
      </ModalContents>
      <Dim />
    </StyledModal>
  )
}

export default Modal