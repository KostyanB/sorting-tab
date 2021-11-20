import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
//store
import {
    selectActiveMonth,
    selectActiveYear
} from '../../store/statisticOnPageSlice';
//components
import Container from '../Styled/Container';
//styled
const HeadTitle = styled.h1`
    font-size: clamp(24px, 4vw, 32px);
`;

const Title = () => {
    const [ month, setMonth ] = useState('');
    const [ year, setYear ] = useState('');
    const activeMonth = useSelector(selectActiveMonth);
    const activeYear = useSelector(selectActiveYear);

    useEffect(() => {
        const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        setYear(activeYear);
        setMonth(monthArr[activeMonth]);
    }, [activeYear, activeMonth]);

	return (
        <Container>
            <HeadTitle>
                Users visit time in {month} {year}
            </HeadTitle>
        </Container>
	);
}
export default Title;