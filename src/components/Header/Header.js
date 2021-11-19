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
const Title = styled.h1`
    font-size: clamp(24px, 4vw, 32px);
`;

const Header = () => {
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
            <Title>
                Users visit time in {month} {year}
            </Title>
        </Container>
	);
}
export default Header;