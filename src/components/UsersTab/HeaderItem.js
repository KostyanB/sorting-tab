import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//components
import Button from '../Styled/Button';
//store
import {
    selectDirectSort,
    selectSortColumn,
    setSortingColumn,
    setReverseSortingColumn,
    toggleSortingDirect,
} from '../../store/userDataSlice';
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

const HeaderItem = ({ text, name, title }) => {
    const dispatch = useDispatch();
    const directSort = useSelector(selectDirectSort);
    const sortColumn = useSelector(selectSortColumn);

    const showWeather = date => date && dispatch(getModalData(date));

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
        <Button onClick={() => showWeather(title)}
            title={title}
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