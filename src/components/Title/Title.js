import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//components
import Container from '../Styled/Container';
//styled
const HeadTitle = styled.h1`
    font-size: clamp(24px, 4vw, 32px);
    text-align: center;
`;

const Title = ({ activeMonth, activeYear }) => {
    const [ month, setMonth ] = useState('');
    const [ year, setYear ] = useState('');

    useEffect(() => {
        const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        setYear(activeYear);
        setMonth(monthArr[activeMonth - 1]);
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