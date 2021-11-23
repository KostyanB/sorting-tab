import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../../env.json';
//store
import {
    selectDirectSort,
    selectSortColumn,
    setSortingColumn,
    setReverseSortingColumn,
    toggleSortingDirect,
} from '../../../store/userDataSlice';
//components
import { Sort } from '../../Styled/TabComponents';
import HeaderSortBtn from './HeaderSortBtn';
//style-var

const HeaderItemSort = ({ name }) => {
    const { tabHoverColor, sortBtnMain } = env.style.tab;
    const dispatch = useDispatch();
    const directSort = useSelector(selectDirectSort);
    const sortColumn = useSelector(selectSortColumn);

    const colorStyleUp = (sortColumn === name && directSort) ? tabHoverColor : sortBtnMain;
    const colorStyleDown = (sortColumn === name && !directSort) ? tabHoverColor : sortBtnMain;

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
        <Sort>
            <HeaderSortBtn color={colorStyleUp}
                sortingFn={handleSorting}
                directName='up'
            />
            <HeaderSortBtn color={colorStyleDown}
                sortingFn={handleSorting}
                directName='down'
            />
        </Sort>
    );
}
export default HeaderItemSort;