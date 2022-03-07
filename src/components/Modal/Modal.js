import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import env from '../../env.json';
//recoil state
import { openModalState } from '../../recoilStore/modalStore';
// components
import ModalInfo from './ModalInfo';
// styled-var
const { overlayColor, messageBack, closeMain, closeHov } = env.style.modal;
// styled
const Overlay = styled.dialog`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 1000;
  overflow-y: auto;
  background: ${overlayColor};
  backdrop-filter: blur(3px);
  border: none;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  &[open] {
    transform: scale(1);
    opacity: 1;
    & > div {
      transform: scale(1);
    }
  }
`;
const ContentWrap = styled.div`
  display: grid;
  width: min(500px, 100vw);
  min-height: 220px;
  border-radius: 8px;
  border: none;
  background-color: ${messageBack};
  font-weight: 300;

  transform: scale(0);
  transition: transform 0.5s ease-in-out;

  & > * {
    grid-area: 1/-1;
  }
`;
const BtnClose = styled.button`
  position: relative;
  place-self: start end;
  width: 3em;
  height: 3em;
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 5px;
    left: 5px;
    border-bottom: 1px solid ${closeMain};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      border-color: ${closeHov};
    }
  }
`;

const Modal = () => {
  const [openModal, setOpenModal] = useRecoilState(openModalState);

  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const isTargetForClose = target =>
    target === dialogRef.current || target === closeRef.current;

  const closeModal = event => {
    if (isTargetForClose(event.target)) setOpenModal(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    openModal ? dialog.showModal() : dialog.close();
  }, [openModal]);

  return (
    <Overlay onClick={closeModal} id='overlay' ref={dialogRef}>
      <ContentWrap>
        <ModalInfo />
        <BtnClose onClick={closeModal} id='close-btn' ref={closeRef} />
      </ContentWrap>
    </Overlay>
  );
};
export default Modal;
