import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import env from '../../env.json';
//recoil states
import {
    directSortState,
    arrFilterState,
    activePageState,
    sortColumnState
} from '../../recoilStore/usersTabStore';
//components
import Container from '../Styled/Container';
import FindForm from './FindForm';
import FindButtons from './FindButtons';
//init store values
const {
    initActivePage,
    initSortColumn,
    initDirectSort,
} = env.initialStates.initStatOnPage;
//styled
const Wrapper = styled(Container)`
    margin-top: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const FindUser = () => {
    const [ disableFind, setDisableFind ] = useState(true);
    const [ inputValue, setInputValue ] = useState('');

    const setArrFilter = useSetRecoilState(arrFilterState);
    const setDirectSort = useSetRecoilState(directSortState);
    const setActivePage = useSetRecoilState(activePageState);
    const setSortColumn = useSetRecoilState(sortColumnState);

    useEffect(() => {
        const isFindDisable = inputValue ? false : true;
        setDisableFind(isFindDisable);
    }, [inputValue]);

    const resetPageStates = () => {
        setActivePage(initActivePage);
        setDirectSort(initDirectSort);
        setSortColumn(initSortColumn);
    };

    const showUser = (e) => {
        e.preventDefault();
        if (inputValue) {
            setArrFilter(inputValue);
            resetPageStates();
        }
    };

    const reset = () => {
        setArrFilter('');
        resetPageStates();
        setInputValue('');
    };

    const changeInput = e => setInputValue(e.target.value);

	return (
        <Wrapper>
            <FindForm inputValue={inputValue}
                showUser={showUser}
                changeInput={changeInput}
            />
            <FindButtons disableFind={disableFind}
                reset={reset}
            />
        </Wrapper>
	);
}
export default FindUser;