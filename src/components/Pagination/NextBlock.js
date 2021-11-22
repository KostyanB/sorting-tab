import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//store
import {
    selectActivePage,
    setActivePage,
} from '../../store/userDataSlice';
//components
import Button from '../Styled/ButtonPagination';
import BtnBlock from '../Styled/BtnBlock';
//styled
const NextWrap = styled(BtnBlock)`
    grid-area: next;
`;

//  ****************************************************
const NextBlock = ({ pagesCount }) => {
    const [ disableNext, setDisableNext ] = useState(false);

    const dispatch = useDispatch();
    const activePage = useSelector(selectActivePage);

    useEffect(() => {
        const isNextDisable = (activePage === pagesCount) ? true : false;
        setDisableNext(isNextDisable);
    }, [activePage, pagesCount]);

    const showNext = () => {
        const newPage = activePage + 1;
        dispatch(setActivePage(newPage));
    };

    const showLast = () => dispatch(setActivePage(pagesCount));

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