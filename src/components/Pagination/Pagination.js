import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//store
import {
    selectUsersCount,
    selectActivePage,
    setActivePage,
    selectRowOnPage,
} from '../../store/userDataSlice';
//components
import Container from '../Styled/Container';
import Button from '../Styled/Button';
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
const Btn = styled(Button)`
    padding: 10px;
    background-color: lightgray;
    color: ${props => props.disabled ? '#a3a3a3' : 'black'};

    &:hover, :active {
        background-color: ${props => props.disabled ? 'lightgray' : 'gray'};
    }
    &:hover {
        color: ${props => props.disabled ? '#a3a3a3' : '#2796FF'};
    }
    &:active {
        color: ${props => props.disabled ? '#a3a3a3' : 'white'};
    }
`;
const BtnBlock = styled.div`
    display: flex;
    gap: 10px;
`;
const PrevBlock = styled(BtnBlock)`
    grid-area: prev;
`;
const NextBlock = styled(BtnBlock)`
    grid-area: next;
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
    const [ disablePrev, setDisablePrev ] = useState(false);
    const [ disableNext, setDisableNext ] = useState(false);

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

    useEffect(() => {
        const isPrevDisable = (activePage === 1) ? true : false;
        const isNextDisable = (activePage === pagesCount) ? true : false;
        setDisablePrev(isPrevDisable);
        setDisableNext(isNextDisable);
    }, [activePage, pagesCount]);

    const showPrev = () =>{
        const newPage = activePage - 1;
        dispatch(setActivePage(newPage));
    };

    const showNext = () => {
        const newPage = activePage + 1;
        dispatch(setActivePage(newPage));
    };

    const showFirst = () => dispatch(setActivePage(1));

    const showLast = () => dispatch(setActivePage(pagesCount));

	return (
        <>
        {showPagination &&
        <Wrapper>
            <PrevBlock>
                <Btn onClick={showFirst}
                    disabled={disablePrev}
                >
                    First
                </Btn>
                <Btn onClick={showPrev}
                    disabled={disablePrev}
                >
                    Prev
                </Btn>
            </PrevBlock>
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
            <NextBlock>
                <Btn onClick={showNext}
                    disabled={disableNext}
                >
                    Next
                </Btn>
                <Btn onClick={showLast}
                    disabled={disableNext}
                >
                    Last
                </Btn>
            </NextBlock>
        </Wrapper>
        }
        </>
	);
}
export default Pagination;