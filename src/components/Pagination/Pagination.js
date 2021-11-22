import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
//store
import {
    selectUsersCount,
    selectActivePage,
    selectRowOnPage,
} from '../../store/userDataSlice';
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
const Pages = styled.ul`
    grid-area: pag;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-left: 20px;
    padding-right: 20px;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${props => props.color};
`;

const RepeatItem = props => {
    const { count, ...otherProps } = props;
    let items = [];
    for (let index = 1; index <= count; index++) {
        items.push(props.children({ index, otherProps }))
    }
    return <>{items}</>
};

//  ****************************************************
const Pagination = () => {
    const [ pagesCount, setPagesCount ] = useState(0);
    const [ showPagination, setShowPagination ] = useState(false);

    const usersCount = useSelector(selectUsersCount);
    const activePage = useSelector(selectActivePage);
    const rowOnPage = useSelector(selectRowOnPage);

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