import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { animated, useTransition } from 'react-spring'
// components
import Message from '../Styled/Message';
import Course from './Course';
// store
import {
    selectOpenModal,
    selectModalData,
    selectError,
    selectMessage,
    closeModal,
} from '../../store/modalSlice';

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
    background: rgba(0, 0, 0, 0.5);
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
    background-color: #000;
    color: #fff;
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
        border-bottom: 1px solid white;
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
        border-color: #2796FF;
    }
`;

// ****************************************
const Modal = () => {

    const dispatch = useDispatch(),
        openModal = useSelector(selectOpenModal),
        modalData = useSelector(selectModalData),
        error = useSelector(selectError),
        message = useSelector(selectMessage);

    // закрытие модалки и сброс
    const close = e => {
        if (e.target.id === 'overlay' || e.target.id === 'close-btn') {
            dispatch(closeModal());
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
        <Overlay onClick={close} id="overlay">
            {transitions((styles, item) => item &&
                <animated.div style={styles}>
                    <ModalWrap>
                        {modalData &&
                            <Message>
                                <Course/>
                            </Message>
                        }
                        {error &&
                            <Message>
                                {message}
                            </Message>
                        }
                        <BtnClose onClick={close}
                            id="close-btn"
                        />
                    </ModalWrap>
                </animated.div>
            )}
        </Overlay>
    );
};
export default Modal;