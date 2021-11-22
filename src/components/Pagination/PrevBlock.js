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
const PrevWrap = styled(BtnBlock)`
    grid-area: prev;
`;

//  ****************************************************
const PrevBlock = () => {
    const [ disablePrev, setDisablePrev ] = useState(false);

    const dispatch = useDispatch();
    const activePage = useSelector(selectActivePage);

    useEffect(() => {
        const isPrevDisable = (activePage === 1) ? true : false;
        setDisablePrev(isPrevDisable);
    }, [activePage]);

    const showPrev = () =>{
        const newPage = activePage - 1;
        dispatch(setActivePage(newPage));
    };

    const showFirst = () => dispatch(setActivePage(1));

	return (
        <PrevWrap>
            <Button onClick={showFirst}
                disabled={disablePrev}
            >
                First
            </Button>
            <Button onClick={showPrev}
                disabled={disablePrev}
            >
                Prev
            </Button>
        </PrevWrap>
	);
}
export default PrevBlock;