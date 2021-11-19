import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//store
import {
    selectUsersCount,
    selectActivePage,
    setActivePage,
    selectRowOnPage,
} from '../../store/statisticOnPageSlice';
//components
import Container from '../Styled/Container';
import Button from '../Styled/Button';
//styled
const Wrapper = styled(Container)`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: max-content auto max-content;
    grid-template-areas: "prev pag next";

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, max-content);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: "pag pag" "prev next";
    }
`;
const Btn = styled(Button)`
    padding: 10px;
    background-color: lightgray;

    &:hover, :active {
        background-color: ${props => props.disabled ? 'lightgray' : 'gray'};
        color: ${props => props.disabled ? 'black' : '#2796FF'};
    }
`;
const BtnPrev = styled(Btn)`
    grid-area: prev;
`;
const BtnNext = styled(Btn)`
    grid-area: next;
`;
const Pages = styled.ul`
    grid-area: pag;
    display: flex;
    justify-content: flex-between;
    align-items: center;
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
    const [ showPagination, setShowPagination ] = useState(false)
    const dispatch = useDispatch();
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

    const showPrev = () =>{
        const newPage = activePage - 1;
        dispatch(setActivePage(newPage));
    };

    const showNext = () => {
        const newPage = activePage + 1;
        dispatch(setActivePage(newPage));
    };

	return (
        <>
        {showPagination &&
        <Wrapper>
            <BtnPrev onClick={showPrev}
                disabled={(activePage === 1) ? true : false}
            >
                Prev
            </BtnPrev>
            <Pages>
                <RepeatItem count={pagesCount}
                    activePage={activePage}
                >
                    {({ index, otherProps }) => (
                        <Item key={index}
                            color={(index === otherProps.activePage) ? "#2796FF" : "black"}
                        >
                            {index}
                        </Item>
                    )}
                </RepeatItem>
            </Pages>
            <BtnNext onClick={showNext}
                disabled={(activePage === pagesCount) ? true : false}
            >
                Next
            </BtnNext>
        </Wrapper>
        }
        </>
	);
}
export default Pagination;