import React from 'react';

import { Item } from '../Styled/TabComponents';

const ItemsMain = ({ items }) => {
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
        <>
            {items && Object.values(items).map((item, i) =>
                <Item key={i}>
                    {createMinHourText(item.visitTime)}
                </Item>
            )}
        </>
    );
}
export default ItemsMain;