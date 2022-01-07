import React from 'react';
import { useRecoilValue } from 'recoil';
//recoil state
import { dataOnPageState } from '../../recoilStore/showTabStore';
//components
import TabRow from './TabRow';

const TabBody = () => {
  const dataOnPage = useRecoilValue(dataOnPageState);

  return (
    <tbody>
      {dataOnPage &&
        dataOnPage.map(({ id, userName, total, days }) => (
          <TabRow key={id} id={id} name={userName} total={total} items={days} />
        ))}
    </tbody>
  );
};
export default TabBody;
