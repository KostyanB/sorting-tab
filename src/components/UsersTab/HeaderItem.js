import React from 'react';
import { useDispatch } from 'react-redux';
//components
import Button from '../Styled/Button';
import HeaderItemSort from './HeaderItemSort';
//store
import { getModalData } from '../../store/modalSlice';


const HeaderItem = ({ text, name, title }) => {
    const dispatch = useDispatch();

    const showWeather = date => date && dispatch(getModalData(date));

    return (
        <>
            <Button onClick={() => showWeather(title)}
                title={title}
            >
                {text}
            </Button>
            <HeaderItemSort name={name}/>
        </>
    );
}
export default HeaderItem;