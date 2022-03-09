import React from 'react';
import createVisitTimeText from '../../helpers/createVisitTimeText';
//components
import { User, Total, Item } from '../Styled/TabComponents';

const TabRow = ({ id, name, total, items }) => (
  <tr>
    <User title={`id: ${id}`}>{name}</User>
    {items &&
      Object.values(items).map((item, i) => (
        <Item key={i}>{item.visitTimeText}</Item>
      ))}
    <Total>{createVisitTimeText(total)}</Total>
  </tr>
);
export default TabRow;
