import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import './usersTab.scss';
//components
import Container from '../Styled/Container';
//functions
import createDaysArr from '../../functions/createDaysArr';
//store
import { selectStatisticDb } from '../../store/getStatisticSlice';
import {
    selectActiveMonth,
    selectActiveYear,
    setStartPage,
    toggleSortingDirect,
    setSortingColumn
} from '../../store/statisticOnPageSlice';

const Wrapper = styled(Container)`
    display: flex;
    height: 40px;
    background-color: lightcyan;
`;

//  ****************************************************
const UsersTab = () => {
    const dispatch = useDispatch();
    const statisticDb = useSelector(selectStatisticDb);
    const activeYear = useSelector(selectActiveYear);
    const activeMonth = useSelector(selectActiveMonth);
    const daysArr = createDaysArr(activeMonth, activeYear);

    useEffect(() => {
        dispatch(setStartPage({ statisticDb, daysArr }));
    }, [dispatch, statisticDb, daysArr]);

    const toggleFn = () => dispatch(toggleSortingDirect());
    const setSort = () => dispatch(setSortingColumn(5));


    return (
        <Wrapper>
            <button onClick={toggleFn}>toggle</button>
            <button onClick={setSort}>sort</button>
        </Wrapper>
	);
}
export default UsersTab;