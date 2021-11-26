import React from 'react';
import {
    useRecoilValue,
    useRecoilValueLoadable
} from 'recoil';
//recoil state
import {
    activeDateState,
    modalDataQuery,
} from '../../recoilStore/modalStore';
// components
import Course from './Course';
import Message from '../Styled/Message';
import Loader from '../Styled/Loader';

const InfoBlock = () => {
    const activeDate = useRecoilValue(activeDateState);
    const modalDataLoadable = useRecoilValueLoadable(
        modalDataQuery(activeDate)
    );

    try {
        switch (modalDataLoadable.state) {
            case 'hasValue':
                if (!modalDataLoadable.contents.error) {
                    return <Course modalData={modalDataLoadable.contents}/>;
                } else {
                    throw new Error(modalDataLoadable.contents.message);
                }
            case 'loading':
                return <Loader/>;
            case 'hasError':
                throw new Error(modalDataLoadable.contents);
        }
    } catch (error) {
        return (
            <>
                <p>Ошибка: {error.message}.</p>
                <p>Попробуйте повторить позже.</p>
            </>
        )
    }
};

const ModalInfo = () => (
    <Message>
        <InfoBlock/>
    </Message>
)
export default ModalInfo;