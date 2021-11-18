import React from 'react';

import {
    ItemWrap,
    Items,
    Item,
    User,
    Total
} from '../Styled/TabComponents';

const TabRow = ({ name, total, items }) => {
    const toLocal = val => val.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

    const createMinHourText = visitTime => {
        if (visitTime > 0) {
            const visitMinute = toLocal(Math.floor(visitTime % 60));
            const visitHour = toLocal(Math.floor(visitTime / 60));
            return `${toLocal(visitHour)}:${toLocal(visitMinute)}`;
        } else {
            return visitTime;
        }
    };

    return (
        <Items>
            <User>{name}</User>
            <ItemWrap>
                {items && Object.values(items).map((item, i) =>
                    <Item key={i}>
                        {createMinHourText(item.visitTime)}
                    </Item>
                )}
            </ItemWrap>
            <Total>{total}</Total>
        </Items>
    );
}
export default TabRow;