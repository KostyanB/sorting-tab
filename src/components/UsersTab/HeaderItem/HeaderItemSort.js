import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRecoilState } from 'recoil';
import env from '../../../env.json';
//store
import {
    selectSortColumn,
    setSortingColumn,
    setReverseSortingColumn,
    toggleSortingDirect,
} from '../../../store/userDataSlice';
//recoil state
import { directSortState } from '../../../recoilState/mainTabStates';
//components
import { Sort } from '../../Styled/TabComponents';
import HeaderSortBtn from './HeaderSortBtn';
//style-var

const HeaderItemSort = ({ name }) => {
    const { tabHoverColor, sortBtnMain } = env.style.tab;
    const dispatch = useDispatch();
    const [ directSort, setDirectSort ] = useRecoilState(directSortState);
    const sortColumn = useSelector(selectSortColumn);

    const colorStyleUp = (sortColumn === name && directSort) ? tabHoverColor : sortBtnMain;
    const colorStyleDown = (sortColumn === name && !directSort) ? tabHoverColor : sortBtnMain;

    const handleSorting = direct => {
        if (sortColumn === name) {
            dispatch(toggleSortingDirect());
            setDirectSort(!directSort);
        } else if (direct === 'up'){
            dispatch(setSortingColumn(name));
            setDirectSort(true);
        } else {
            dispatch(setReverseSortingColumn(name));
            setDirectSort(false);
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