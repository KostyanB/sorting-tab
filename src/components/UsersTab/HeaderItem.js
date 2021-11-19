import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//helpers
import toLocale from '../../helpers/toLocale';
//components
import Button from '../Styled/Button';
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
import { getModalData } from '../../store/modalSlice';
//components
import { UpIcon, DownIcon } from '../Styled/Icons/Icons';
import { Sort } from '../Styled/TabComponents';
//styled
const SortButton = styled(Button)`
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
    const [ date, setDate ] = useState('');
    const dispatch = useDispatch();
    const directSort = useSelector(selectDirectSort);
    const sortColumn = useSelector(selectSortColumn);
    const activeMonth = useSelector(selectActiveMonth);
    const activeYear = useSelector(selectActiveYear);

    useEffect(() => {
        if (text !== 'Total' || text !== 'Name') {
            const date = `${activeYear}-${toLocale(activeMonth + 1)}-${toLocale(text)}`;
            setDate(date);
        }
    }, [text, activeYear, activeMonth]);

    const showWeather = date => dispatch(getModalData(date));

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
        <Button onClick={() => showWeather(date)}
            title={date}
        >
            {text}
        </Button>
        <Sort>
            <SortButton onClick={() => handleSorting('up')}
                color={(sortColumn === name && directSort) ? '#2796FF' : 'black'}
            >
                <UpIcon />
            </SortButton>
            <SortButton onClick={() => handleSorting('down')}
                color={(sortColumn === name && !directSort) ? '#2796FF' : 'black'}
            >
                <DownIcon/>
            </SortButton>
        </Sort>
        </>
    );
}
export default HeaderItem;