import styled from 'styled-components'
import Image from 'next/image'
import {memo} from 'react'

type Props = {
  onDismiss?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseModal: () => void;
  children: JSX.Element | string;
};

export const Modal = memo(({
  onDismiss,
  onCloseModal,
  children,
}: Props) => {
  return (
    <ModalWrapper onClick={onDismiss}>
      <ModalContent>
        <CrossWrapper onClick={onCloseModal}>
          <Image src={'/png/close.png'} alt='cross image' width={10} height={10} />
        </CrossWrapper>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
})

Modal.displayName='Modal'

const CrossWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
`

const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalContent = styled.div`
  position: relative;
  min-width:500px;
  min-height: 230px;
  background: #ffffff;
  border-radius: 8px;
  padding: 44px 49px;
  max-height: 100vh;
`
