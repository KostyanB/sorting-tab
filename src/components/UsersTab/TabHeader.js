import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
//helpers
import createDaysArr from '../../helpers/createDaysArr';
//recoil state
import {
  activePeriodState,
  daysCountState,
} from '../../recoilStore/usersDataStore';
//components
import HeaderItem from '../HeaderItem';
import { User, Total } from '../Styled/TabComponents';

const TabHeader = () => {
  const [daysArr, setDaysArr] = useState(null);

  const activePeriod = useRecoilValue(activePeriodState);
  const daysCount = useRecoilValue(daysCountState);

  useEffect(
    () =>
      activePeriod &&
      setDaysArr(
        createDaysArr(
          daysCount,
          activePeriod.activeMonth,
          activePeriod.activeYear,
        ),
      ),
    [daysCount, activePeriod],
  );

  return (
    <thead>
      <tr>
        <User>
          <HeaderItem text='Name' name='userName' />
        </User>
        {daysArr &&
          daysArr.map((item, i) => (
            <td key={item}>
              <HeaderItem text={i + 1} name={i + 1} title={item} />
            </td>
          ))}
        <Total>
          <HeaderItem text='Total' name='total' />
        </Total>
      </tr>
    </thead>
  );
};
export default TabHeader;
