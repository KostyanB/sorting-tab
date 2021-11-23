import React from 'react';

import {
    ItemWrap,
    Row,
    User,
    Total
} from '../Styled/TabComponents';

const Item = props => <>{props.children(props)}</>;

const TabRow = ({ userProps, totalProps, items, childComponent }) => {
    const { usersText, usersName = ''} = userProps;
    const { totalsText, totalsName = ''} = totalProps;
    return (
        <>
            <User name={usersName}>{usersText}</User>
            <ItemWrap>
                {items && items.map((item, i) =>
                    <Item key={i}
                        item={item}
                        i={i}
                        childComponent={childComponent}
                    >
                        {childComponent}
                    </Item>
                )}
            </ItemWrap>
            <Total name={totalsName}>{totalsText}</Total>
        </>
    )
};

const TabRowHOC = WrappedRow => props => (
    <Row key={props.id}>
        <WrappedRow {...props}/>
    </Row>
);

const WrappedTabRow = TabRowHOC(TabRow);
export default WrappedTabRow;