import React from 'react';
import { useRecoilValue } from 'recoil';
//recoil state
import { dataOnPageState } from '../../recoilStore/usersTabStore';
//components
import TabRow from './TabRow';

const TabBody = () => {
    const dataOnPage = useRecoilValue(dataOnPageState);

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