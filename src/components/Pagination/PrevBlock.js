import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/usersTabStore';
//components
import Button from './PagButton';
import BtnBlock from '../Styled/BtnBlock';
//styled
const PrevWrap = styled(BtnBlock)`
    grid-area: prev;
`;

//  ****************************************************
const PrevBlock = () => {
    const [ disablePrev, setDisablePrev ] = useState(false);

    const [ activePage, setActivePage ] = useRecoilState(activePageState);
    const resetActivePage = useResetRecoilState(activePageState);

    useEffect(() => {
        const isPrevDisable = (activePage === 1) ? true : false;
        setDisablePrev(isPrevDisable);
    }, [activePage]);

    const showPrev = () =>{
        const newPage = activePage - 1;
        setActivePage(newPage);
    };

    const showFirst = () => resetActivePage();

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