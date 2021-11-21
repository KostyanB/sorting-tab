import React from 'react';
import { useSelector } from 'react-redux';
//store
import { selectDaysArr } from '../../store/userDataSlice';
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

const TabHeader = () => {
    const daysArr = useSelector(selectDaysArr);

    return (
        <Row>
            <User>
                <HeaderItem
                    text='Name'
                    name='userName'
                />
            </User>
            <ItemWrap>
                {daysArr.map((item, i) =>
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