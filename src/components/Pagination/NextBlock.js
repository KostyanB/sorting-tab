import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
//recoil state
import {
    activePageState,
} from '../../recoilStore/usersTabStore';
//components
import Button from './PagButton';
import BtnBlock from '../Styled/BtnBlock';
//styled
const NextWrap = styled(BtnBlock)`
    grid-area: next;
`;

//  ****************************************************
const NextBlock = ({ pagesCount }) => {
    const [ disableNext, setDisableNext ] = useState(false);

    const [ activePage, setActivePage ] = useRecoilState(activePageState);

    useEffect(() => {
        const isNextDisable = (activePage === pagesCount) ? true : false;
        setDisableNext(isNextDisable);
    }, [activePage, pagesCount]);

    const showNext = () => {
        const newPage = activePage + 1;
        setActivePage(newPage);
    };

    const showLast = () => setActivePage(pagesCount);

	return (
        <NextWrap>
            <Button onClick={showNext}
                disabled={disableNext}
            >
                Next
            </Button>
            <Button onClick={showLast}
                disabled={disableNext}
            >
                Last
            </Button>
        </NextWrap>
	);
}
export default NextBlock;