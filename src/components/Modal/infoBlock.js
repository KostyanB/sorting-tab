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
import Loader from '../Styled/Loader';
import ErrMessage from './ErrMessage';

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
                return <Loader size='60px'/>;
            case 'hasError':
                throw new Error(modalDataLoadable.contents);
        }
    } catch (error) {
        return <ErrMessage text={error.message}/>
    }
};
export default InfoBlock;