import React from 'react';
//components
import { ItemWrap, Row, User, Total } from '../Styled/TabComponents';
import ItemHOC from './ItemHOC';
//use HOC
const MainItem = ({text}) => <>{text}</>;
const WrappedMainItem = ItemHOC(MainItem);

const TabRow = ({ name, total, items }) => (
    <Row>
        <User>{name}</User>
        <ItemWrap>
            {items && Object.values(items).map((item, i) =>
                <WrappedMainItem key={i}
                    text={item.visitTimeText}
                />
            )}
        </ItemWrap>
        <Total>{total}</Total>
    </Row>
)
export default TabRow;