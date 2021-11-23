import React from 'react';
import { useSelector } from 'react-redux';
//components
import WrappedTabRow from './TabRow1';
import ItemHOC from './ItemHOC';
//store
import { selectDataOnPage } from '../../store/userDataSlice';

const MainItem = ({ item }) => <>{item.visitTimeText}</>;
const WrappedItem = ItemHOC(MainItem);

const TabBody = () => {
    const dataOnPage = useSelector(selectDataOnPage);

    return (
        <>
        {dataOnPage && dataOnPage.map(({id, userName, total, days}) =>
            <WrappedTabRow key={id}
                id={id}
                userProps={{usersText: userName}}
                totalProps={{totalsText: total}}
                items={Object.values(days)}
                childComponent={WrappedItem}
            />
        )}
        </>
	);
}
export default TabBody;