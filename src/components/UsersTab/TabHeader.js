import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
//helpers
import createDaysArr from '../../helpers/createDaysArr1';
//recoil state
import {
    activePeriodState,
    daysCountState
} from '../../recoilStore/userDataStore';
//components
import HeaderItem from './HeaderItem';
import { ItemWrap, Row, User, Total } from '../Styled/TabComponents';
import ItemHOC from './ItemHOC';

const WrappedHeaderItem = ItemHOC(HeaderItem);

const TabHeader = () => {
    const [ daysArr, setDaysArr ] = useState(null);

    const activePeriod = useRecoilValue(activePeriodState);
    const daysCount = useRecoilValue(daysCountState);

    useEffect(() =>
        activePeriod && setDaysArr(createDaysArr(
            daysCount,
            activePeriod.activeMonth,
            activePeriod.activeYear
        )
    ), [
        daysCount,
        activePeriod
    ]);

    return (
        <Row>
            <User>
                <HeaderItem
                    text='Name'
                    name='userName'
                />
            </User>
            <ItemWrap>
                {daysArr && daysArr.map((item, i) =>
                    <WrappedHeaderItem key={item}
                        text={i + 1}
                        name={i + 1}
                        title={item}
                    />
                )}
            </ItemWrap>
            <Total>
                <HeaderItem
                    text='Total'
                    name='total'
                />
            </Total>
        </Row>
    );
}
export default TabHeader;