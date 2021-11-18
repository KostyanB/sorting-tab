import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//store
import {
    selectUsersCount
} from '../../store/getStatisticSlice.js'
import {
    selectActivePage,
    setActivePage,
} from '../../store/statisticOnPageSlice';
//components
import Container from '../Styled/Container';
import { Button } from '../Styled/Button';
//styled
const Wrapper = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const Btn = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: lightgray;

    &:hover, :active {
        background-color: ${props => props.disabled ? 'lightgray' : 'gray'};
        color: ${props => props.disabled ? 'black' : 'red'};
    }
`;
const Pages = styled.ul`
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
    const dispatch = useDispatch();
    const usersCount = useSelector(selectUsersCount);
    const activePage = useSelector(selectActivePage);

    useEffect(() => {
        const count = Math.ceil(usersCount / 10);
        setPagesCount(count);
    }, [usersCount]);

    const showPrev = () =>{
        const newPage = activePage - 1;
        dispatch(setActivePage(newPage));
    };

    const showNext = () => {
        const newPage = activePage + 1;
        dispatch(setActivePage(newPage));
    };

	return (
        <Wrapper>
            <Btn onClick={showPrev}
                disabled={(activePage === 1) ? true : false}
            >
                Prev
            </Btn>
            <Pages>
                <RepeatItem count={pagesCount}
                    activePage={activePage}
                >
                    {({ index, otherProps }) => (
                        <Item key={index}
                            color={(index === otherProps.activePage) ? "red" : "black"}
                        >
                            {index}
                        </Item>
                    )}
                </RepeatItem>
            </Pages>
            <Btn onClick={showNext}
                disabled={(activePage === pagesCount) ? true : false}
            >
                Next
            </Btn>
        </Wrapper>
	);
}
export default Pagination;