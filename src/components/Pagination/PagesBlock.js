import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
//store
import { selectActivePage } from '../../store/userDataSlice';
//styled
const PagesWrap = styled.ul`
    grid-area: pag;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-left: 20px;
    padding-right: 20px;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${props => props.color};
`;

const RepeatItem = props => {
    const { count, ...otherProps } = props;
    let items = [];
    for (let index = 1; index <= count; index++) {
        items.push(props.children({ index, otherProps }))
    }
    return <>{items}</>
};

//  ****************************************************
const PagesBlock = ({ pagesCount }) => {
    const activePage = useSelector(selectActivePage);

	return (
        <PagesWrap>
            <RepeatItem count={pagesCount}
                activePage={activePage}
            >
                {({ index, otherProps }) => (
                    <Item key={index}
                        color={(index === otherProps.activePage) ? "#2796FF" : "black"}
                    >
                        {index}
                    </Item>
                )}
            </RepeatItem>
        </PagesWrap>
	);
}
export default PagesBlock;