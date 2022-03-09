import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import env from '../../env.json';
//recoil state
import { activeDateState } from '../../recoilStore/modalStore';
// components
import InfoBlock from './InfoBlock';

// styled-var
const { bodyColor, hoverColor, mainTextColor } = env.style;
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
  background: rgba(0, 0, 0, 0.5);
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
const Content = styled.div`
  display: grid;
  width: min(500px, 100vw);
  min-height: 220px;
  border-radius: 8px;
  border: none;
  background-color: ${mainTextColor};
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
    border-bottom: 1px solid ${bodyColor};
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
      border-color: ${hoverColor};
    }
  }
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px 10px;
  color: ${hoverColor};
  font-size: 2em;
  text-align: center;
`;

const Modal = () => {
  const activeDate = useRecoilValue(activeDateState);
  const resetModal = useResetRecoilState(activeDateState);

  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const isTargetForClose = target =>
    target === dialogRef.current || target === closeRef.current;

  const closeModal = event => {
    if (isTargetForClose(event.target)) resetModal();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    activeDate ? dialog.showModal() : dialog.close();
  }, [activeDate]);

  return (
    <Overlay onClick={closeModal} ref={dialogRef}>
      <Content>
        <Info>
          <InfoBlock />
        </Info>
        <BtnClose onClick={closeModal} ref={closeRef} />
      </Content>
    </Overlay>
  );
};
export default Modal;
