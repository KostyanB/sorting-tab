import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRecoilValue } from 'recoil';
//store
import {
    selectUsersCount,
} from '../../store/userDataSlice';
//recoil state
import { rowOnPageState } from '../../recoilState/mainTabStates';
//components
import Container from '../Styled/Container';
import PrevBlock from './PrevBlock';
import NextBlock from './NextBlock';
import PagesBlock from './PagesBlock';
//styled
const Wrapper = styled(Container)`
    margin-top: 10px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: max-content auto max-content;
    grid-template-areas: "prev pag next";

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, max-content);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: "pag pag" "prev next";
        column-gap: 20px;
    }
`;

//  ****************************************************
const Pagination = () => {
    const [ pagesCount, setPagesCount ] = useState(0);
    const [ showPagination, setShowPagination ] = useState(false);

    const usersCount = useSelector(selectUsersCount);

    const rowOnPage = useRecoilValue(rowOnPageState);

    useEffect(() => {
        if (usersCount > rowOnPage) {
            const count = Math.ceil(usersCount / 10);
            setPagesCount(count);
            setShowPagination(true);
        } else {
            setShowPagination(false);
        }
    }, [usersCount, rowOnPage]);

	return (
        <>
        {showPagination &&
            <Wrapper>
                <PrevBlock/>
                <PagesBlock pagesCount={pagesCount}/>
                <NextBlock pagesCount={pagesCount}/>
            </Wrapper>
        }
        </>
	);
}
export default Pagination;