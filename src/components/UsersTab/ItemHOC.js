import React from 'react';
import { Item } from '../Styled/TabComponents';

const ItemHOC = WrappedItem => props => (
    <Item>
        <WrappedItem {...props}/>
    </Item>
)
export default ItemHOC;