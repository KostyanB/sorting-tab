import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//components
import { Button } from '../Styled/Button';
//store
import {
    selectDirectSort,
    selectSortColumn,
    selectActiveMonth,
    selectActiveYear,
    setSortingColumn,
    setReverseSortingColumn,
    toggleSortingDirect,
} from '../../store/statisticOnPageSlice';

//components
import { UpIcon, DownIcon } from '../Styled/Icons/Icons';
import { Sort } from '../Styled/TabComponents';
//styled
const SortButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8px;
    height: 8px;
    color: ${props => props.color};

    svg {
        width: 8px;
        height: 8px;
        cursor:pointer;
    }
`;


const HeaderItem = ({ text, name }) => {
    const dispatch = useDispatch();
    const directSort = useSelector(selectDirectSort);
    const sortColumn = useSelector(selectSortColumn);
    const activeMonth = useSelector(selectActiveMonth);
    const activeYear = useSelector(selectActiveYear);

    const showWeather = (day, month, year) => {
        if (!day) return;
        const date = new Date(`${year}, ${month}, ${day}`);
        // console.log('date: ', date);
    };

    const handleSorting = direct => {
        if (sortColumn === name) {
            dispatch(toggleSortingDirect());
        } else if (direct === 'up'){
            dispatch(setSortingColumn(name));
        } else {
            dispatch(setReverseSortingColumn(name));
        }
    };

    return (
        <>
        <Button onClick={() => showWeather(text, activeMonth, activeYear)}>
            {text}
        </Button>
        <Sort>
            <SortButton onClick={() => handleSorting('up')}
                color={(sortColumn === name && directSort) ? 'red' : 'black'}
            >
                <UpIcon />
            </SortButton>
            <SortButton onClick={() => handleSorting('down')}
                color={(sortColumn === name && !directSort) ? 'red' : 'black'}
            >
                <DownIcon/>
            </SortButton>
        </Sort>
        </>
    );
}
export default HeaderItem;