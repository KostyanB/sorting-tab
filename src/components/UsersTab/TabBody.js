import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRecoilValue } from 'recoil';
//store
import {
    selectSortingData,
    selectActivePage,
} from '../../store/userDataSlice';
//recoil state
import { rowOnPageState } from '../../recoilState/mainTabStates';
//helpers
import getSlicedArr from '../../helpers/getSlicedArr';
//components
import TabRow from './TabRow';

const TabBody = () => {
    const [ dataOnPage, setDataOnPage ] = useState(null);

    const sortingData = useSelector(selectSortingData);
    const activePage = useSelector(selectActivePage);

    const rowOnPage = useRecoilValue(rowOnPageState);

    const getDataOnPage = useCallback(() =>
        getSlicedArr(activePage,
            rowOnPage,
            sortingData
        ), [
        activePage,
        rowOnPage,
        sortingData
    ]);

    useEffect(() => setDataOnPage(getDataOnPage()), [getDataOnPage]);

    return (
        <>
        {dataOnPage && dataOnPage.map(({id, userName, total, days}) =>
            <TabRow key={id}
                id={id}
                name={userName}
                total={total}
                items={days}
            />
        )}
        </>
	);
}
export default TabBody;