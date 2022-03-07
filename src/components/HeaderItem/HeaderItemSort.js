import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import env from '../../env.json';
//recoil state
import {
  directSortState,
  sortColumnState,
  activePageState,
} from '../../recoilStore/showTabStore';
//components
import HeaderSortBtn from './HeaderSortBtn';
//style-var
const { tabHoverColor, sortBtnMain } = env.style.tab;
//styled
export const Sort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  margin-left: 5px;
  width: 10px;
  height: 100%;
`;

const HeaderItemSort = ({ name }) => {
  const [directSort, setDirectSort] = useRecoilState(directSortState);
  const [sortColumn, setSortColumn] = useRecoilState(sortColumnState);
  const setActivePage = useSetRecoilState(activePageState);

  const colorStyleUp =
    sortColumn === name && directSort ? tabHoverColor : sortBtnMain;
  const colorStyleDown =
    sortColumn === name && !directSort ? tabHoverColor : sortBtnMain;

  const handleSorting = direct => {
    if (sortColumn === name) {
      setDirectSort(!directSort);
    } else {
      setSortColumn(name);
      setActivePage(1);
      setDirectSort(direct === 'up' ? true : false);
    }
  };

  return (
    <Sort>
      <HeaderSortBtn
        color={colorStyleUp}
        sortingFn={handleSorting}
        directName='up'
      />
      <HeaderSortBtn
        color={colorStyleDown}
        sortingFn={handleSorting}
        directName='down'
      />
    </Sort>
  );
};
export default HeaderItemSort;
