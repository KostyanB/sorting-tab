import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
//recoil states
import {
  directSortState,
  arrFilterState,
  activePageState,
  sortColumnState,
} from '../../recoilStore/showTabStore';
//components
import Container from '../Styled/Container';
import FindForm from './FindForm';
import FindButtons from './FindButtons';

//styled
const Wrapper = styled(Container)`
  margin-top: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FindUser = () => {
  const [disableFind, setDisableFind] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const setArrFilter = useSetRecoilState(arrFilterState);
  const resetDirectSort = useResetRecoilState(directSortState);
  const resetActivePage = useResetRecoilState(activePageState);
  const resetSortColumn = useResetRecoilState(sortColumnState);

  useEffect(() => {
    const isFindDisable = inputValue ? false : true;
    setDisableFind(isFindDisable);
  }, [inputValue]);

  const resetPageStates = () => {
    resetActivePage();
    resetDirectSort();
    resetSortColumn();
  };

  const showResult = (value = '') => {
    setArrFilter(value);
    resetPageStates();
  };

  const showUser = e => {
    e.preventDefault();
    inputValue && showResult(inputValue);
  };

  const resetFindUser = () => {
    showResult();
    setInputValue('');
  };

  const changeInput = e => setInputValue(e.target.value);

  return (
    <Wrapper>
      <FindForm
        inputValue={inputValue}
        showUser={showUser}
        changeInput={changeInput}
      />
      <FindButtons disableFind={disableFind} reset={resetFindUser} />
    </Wrapper>
  );
};
export default FindUser;
