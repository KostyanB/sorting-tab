import React from 'react';
import { useSetRecoilState } from 'recoil';
//components
import { Button } from '../../Styled/TabComponents';
import HeaderItemSort from './HeaderItemSort';
//recoil state
import {
    openModalState,
    activeDateState,
} from '../../../recoilStore/modalStore';


const HeaderItem = ({ text, name, title }) => {
    const setOpenModal = useSetRecoilState(openModalState);
    const setActiveDate = useSetRecoilState(activeDateState);

    const showModal = date => {
        if (date) {
            setActiveDate(date);
            setOpenModal(true);
        }
    };

    return (
        <>
            <Button onClick={() => showModal(title, text)}
                title={title}
            >
                {text}
            </Button>
            <HeaderItemSort name={name}/>
        </>
    );
}
export default HeaderItem;