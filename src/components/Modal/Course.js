import React from 'react';
import { useSelector } from 'react-redux';
// store
import { selectModalData } from '../../store/modalSlice';

const Course = () => {
    const modalData = useSelector(selectModalData);
    const { timestamp, rates: { RUB: rub, EUR: euro}} = modalData;
    const date = new Date(timestamp * 1000).toLocaleDateString().split(',')[0];

    return (
        <>
            <p>{date}г.</p>
            <p>Доллар стоил {rub.toFixed(2)} рублей</p>
            <p>Евро стоил {(rub / euro).toFixed(2)} рублей</p>
        </>
    );
}
export default Course;