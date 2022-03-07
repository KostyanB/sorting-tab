import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
//recoil states
import {
  directSortState,
  arrFilterState,
  activePageState,
  sortColumnState,
} from '../../recoilStore/showTabStore';
//hooks
import useDebounce from '../../hooks/useDebounce';
//components
import Container from '../Styled/Container';
import FindForm from './FindForm';
import ResetButton from './ResetButton';

//styled
const Wrapper = styled(Container)`
  margin-top: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FindUser = () => {
  const initInput = '';
  const [inputValue, setInputValue] = useState(initInput);

  const debouncedInput = useDebounce(inputValue, 300);

  const setArrFilter = useSetRecoilState(arrFilterState);
  const resetDirectSort = useResetRecoilState(directSortState);
  const resetActivePage = useResetRecoilState(activePageState);
  const resetSortColumn = useResetRecoilState(sortColumnState);

  const resetPageStates = useCallback(() => {
    resetActivePage();
    resetDirectSort();
    resetSortColumn();
  }, [resetActivePage, resetDirectSort, resetSortColumn]);

  const resetFindUser = () => setInputValue(initInput);

  const changeInput = e => setInputValue(e.target.value);

  useEffect(() => {
    setArrFilter(debouncedInput);
    resetPageStates();
  }, [debouncedInput, setArrFilter, resetPageStates]);

  return (
    <Wrapper>
      <FindForm inputValue={inputValue} changeInput={changeInput} />
      <ResetButton clickFunction={resetFindUser} />
    </Wrapper>
  );
};
export default FindUser;
