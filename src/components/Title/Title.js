import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
//recoil state
import { activePeriodState } from '../../recoilState/mainTabStates';
//components
import Container from '../Styled/Container';
//styled
const HeadTitle = styled.h1`
    font-size: clamp(24px, 4vw, 32px);
    text-align: center;
`;

const Title = () => {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const { activeMonth, activeYear } = useRecoilValue(activePeriodState);
    const month = monthArr[activeMonth - 1];

	return (
        <Container>
            <HeadTitle>
                Users visit time in {month} {activeYear}
            </HeadTitle>
        </Container>
	);
}
export default Title;