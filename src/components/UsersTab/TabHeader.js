import React, { useState, useEffect } from 'react';
//helpers
import createDaysArr from '../../helpers/createDaysArr1';
//components
import HeaderItem from './HeaderItem';
import {
    ItemWrap,
    Row,
    User,
    Total
} from '../Styled/TabComponents';
import ItemHOC from './ItemHOC';

const WrappedHeaderItem = ItemHOC(HeaderItem);

const TabHeader = ({ monthParam }) => {
    const { daysInMonth, activeMonth, activeYear } = monthParam;
    const [ daysArr, setDaysArr ] = useState(null);

    useEffect(() =>
        setDaysArr(createDaysArr(daysInMonth, activeMonth, activeYear)),
    [
        daysInMonth,
        activeMonth,
        activeYear
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