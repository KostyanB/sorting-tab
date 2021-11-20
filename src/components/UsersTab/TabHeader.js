import React from 'react';
import { useSelector } from 'react-redux';
//store
import { selectDaysArr } from '../../store/userDataSlice';
//components
import HeaderItem from './HeaderItem';
import {
    ItemWrap,
    Items,
    Item,
    User,
    Total
} from '../Styled/TabComponents';

const TabHeader = () => {
    const daysArr = useSelector(selectDaysArr);

    return (
        <Items>
            <User>
                <HeaderItem key='userName' text='Name' name='userName' style={{cursor: "default"}}/>
            </User>
            <ItemWrap>
                {daysArr.map((item, i) =>
                    <Item key={item}>
                        <HeaderItem text={i + 1} name={i + 1} title={item}/>
                    </Item>
                )}
            </ItemWrap>
            <Total>
                <HeaderItem key='total' text='Total' name='total'/>
            </Total>
        </Items>
    );
}
export default TabHeader;