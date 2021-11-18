import React from 'react';

import HeaderItem from './HeaderItem';

const HeaderRow = ({ items }) => {
    return (
        <ul className="tab-row__statistic tab-row__header">
            {items && items.map(item =>
                <HeaderItem key={item} text={item}/>
            )}
        </ul>
    );
}
export default HeaderRow;