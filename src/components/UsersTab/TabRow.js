import React from 'react';
//components
import { User, Total, Item } from '../Styled/TabComponents';

const TabRow = ({ id, name, total, items }) => (
  <tr>
    <User>
      <div title={`id: ${id}`}>{name}</div>
    </User>
    {items &&
      Object.values(items).map((item, i) => (
        <Item key={i}>{item.visitTimeText}</Item>
      ))}
    <Total>
      <div>{total}</div>
    </Total>
  </tr>
);
export default TabRow;
