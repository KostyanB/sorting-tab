import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
//store
import {
    selectSortingData,
    selectActivePage,
    selectRowOnPage,
} from '../../store/userDataSlice';
//helpers
import getSlicedArr from '../../helpers/getSlicedArr';
//components
import TabRow from './TabRow';

const TabBody = () => {
    const [ dataOnPage, setDataOnPage ] = useState(null);

    const sortingData = useSelector(selectSortingData);
    const activePage = useSelector(selectActivePage);
    const rowOnPage = useSelector(selectRowOnPage);

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