import React from 'react';
import { useSelector } from 'react-redux';
//store
import { selectDaysInActiveMonth } from '../../store/statisticOnPageSlice';
//components
import HeaderItem from './HeaderItem';
import {
    ItemWrap,
    Items,
    Item,
    User,
    Total
} from '../Styled/TabComponents';

const RepeatItem = props => {
    const { count } = props;
    let items = [];
    for (let i = 1; i <= count; i++) {
        items.push(props.children(i))
    }
    return <>{items}</>
};

const TabHeader = () => {
    const daysInActiveMonth = useSelector(selectDaysInActiveMonth);

    return (
        <Items>
            <User>
                <HeaderItem key='userName' text='Name' name='userName' style={{cursor: "default"}}/>
            </User>
            <ItemWrap>
                <RepeatItem count={daysInActiveMonth}>
                    {(index) => (
                        <Item key={index}>
                            <HeaderItem text={index} name={index}/>
                        </Item>
                    )}
                </RepeatItem>
            </ItemWrap>
            <Total>
                <HeaderItem key='total' text='Total' name='total'/>
            </Total>
        </Items>
    );
}
export default TabHeader;