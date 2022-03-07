import React from 'react';
import { useRecoilValue } from 'recoil';
//recoil state
import { dataOnPageState } from '../../recoilStore/showTabStore';
import { usersCountState } from '../../recoilStore/usersDataStore';
//components
import TabRow from './TabRow';
import NothingFound from './NothingFound';

const TabBody = () => {
  const dataOnPage = useRecoilValue(dataOnPageState);
  const usersCount = useRecoilValue(usersCountState);

  if (usersCount > 0) {
    return (
      <tbody>
        {dataOnPage &&
          dataOnPage.map(({ id, userName, total, days }) => (
            <TabRow
              key={id}
              id={id}
              name={userName}
              total={total}
              items={days}
            />
          ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <NothingFound />
      </tbody>
    );
  }
};
export default TabBody;
