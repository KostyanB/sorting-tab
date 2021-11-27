import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { useRecoilState } from 'recoil';
import env from '../../env.json';
//recoil state
import { openModalState } from '../../recoilStore/modalStore';
// components
import ModalInfo from './ModalInfo';
// styled-var
const {
    overlayColor,
    messageBack,
    closeMain,
    closeHov,
} = env.style.modal;
// styled
const Overlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    overflow-y: auto;
    background: ${overlayColor};
    -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
    -webkit-animation: fadeIn 300ms ease-in-out;
        animation: fadeIn 300ms ease-in-out;
`;
const ModalWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    max-width: 100%;
    min-height: 200px;
    border-radius: 8px;
    border: none;
    padding: 30px;
    background-color: ${messageBack};
    font-weight: 300;
`;
const BtnClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 3em;
    height: 3em;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    ::before, ::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 5px;
        left: 5px;
        border-bottom: 1px solid ${closeMain};
        -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
                transform: rotate(45deg);
    }
    ::after {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
    }
    :focus::before, :hover::before, :focus::after, :hover::after {
        border-color: ${closeHov};
    }
`;

// ****************************************
const Modal = () => {
    const [ openModal, setOpenModal ] = useRecoilState(openModalState);

    // закрытие модалки
    const closeModal = e => {
        if (e.target.id === 'overlay' || e.target.id === 'close-btn') {
            setOpenModal(false);
        }
    };
    // анимация открытия модалки
    const transitions = useTransition(openModal, {
        from: { opacity: 0, transform: `scale(0, 0)` },
        enter: { opacity: 1, transform: `scale(1, 1)` },
        leave: { opacity: 0, transform: `scale(0, 0)`},
        delay: 200
    });

    return (
        <Overlay onClick={closeModal} id="overlay">
            {transitions((styles, item) => item &&
                <animated.div style={styles}>
                    <ModalWrap>
                        <ModalInfo/>
                        <BtnClose onClick={closeModal}
                            id="close-btn"
                        />
                    </ModalWrap>
                </animated.div>
            )}
        </Overlay>
    );
};
export default Modal;