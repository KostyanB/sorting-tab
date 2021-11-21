import React from 'react';
import { useSelector } from 'react-redux';
//components
import TabRow from './TabRow';
//store
import { selectDataOnPage } from '../../store/userDataSlice';

const TabBody = () => {
    const dataOnPage = useSelector(selectDataOnPage);

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