import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import env from '../../../env.json';
//recoil state
import {
    directSortState,
    sortColumnState,
    activePageState,
} from '../../../recoilStore/usersTabStore';
//components
import { Sort } from '../../Styled/TabComponents';
import HeaderSortBtn from './HeaderSortBtn';
//style-var
const {
    tabHoverColor,
    sortBtnMain
} = env.style.tab;

//*************************************** */
const HeaderItemSort = ({ name }) => {
    const [ directSort, setDirectSort ] = useRecoilState(directSortState);
    const [ sortColumn, setSortColumn ] = useRecoilState(sortColumnState);
    const setActivePage = useSetRecoilState(activePageState);

    const colorStyleUp = (sortColumn === name && directSort)
        ? tabHoverColor
        : sortBtnMain;
    const colorStyleDown = (sortColumn === name && !directSort)
        ? tabHoverColor
        : sortBtnMain;

    const handleSorting = direct => {
        if (sortColumn === name) {
            setDirectSort(!directSort);
        } else {
            setSortColumn(name);
            setActivePage(1);
            setDirectSort((direct === 'up') ? true : false);
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