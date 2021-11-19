import React from 'react';

import {
    ItemWrap,
    Items,
    Item,
    User,
    Total
} from '../Styled/TabComponents';

const MainRow = ({ name, total, items }) => (
    <Items>
        <User>{name}</User>
        <ItemWrap>
            {items && Object.values(items).map((item, i) =>
                <Item key={i}>
                    {item.visitTimeText}
                </Item>
            )}
        </ItemWrap>
        <Total>{total}</Total>
    </Items>
)
export default MainRow;