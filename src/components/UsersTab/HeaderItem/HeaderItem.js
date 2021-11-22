import React from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
//components
import { Button } from '../../Styled/TabComponents';
import HeaderItemSort from './HeaderItemSort';
//store
import {
    getModalData,
    selectModalData,
    setOpenModal
} from '../../../store/modalSlice';


const HeaderItem = ({ text, name, title }) => {
    const dispatch = useDispatch();
    const modalData = useSelector(selectModalData);

    const showCurrency = (date, day) => {
        if (date) {
            const storedDay = modalData && new Date((modalData.timestamp - 18000) * 1000).getDate();
            if (storedDay === day) {
                dispatch(setOpenModal());
            } else {
                dispatch(getModalData(date));
            }
        }
    };

    return (
        <>
            <Button onClick={() => showCurrency(title, text)}
                title={title}
            >
                {text}
            </Button>
            <HeaderItemSort name={name}/>
        </>
    );
}
export default HeaderItem;