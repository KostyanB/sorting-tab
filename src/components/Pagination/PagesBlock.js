import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import env from '../../env.json';
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
    const { mainColor, activeColor } = env.style.pagination;

	return (
        <PagesWrap>
            <RepeatItem count={pagesCount}
                activePage={activePage}
            >
                {({ index, otherProps }) => (
                    <Item key={index}
                        color={(index === otherProps.activePage) ? activeColor : mainColor}
                    >
                        {index}
                    </Item>
                )}
            </RepeatItem>
        </PagesWrap>
	);
}
export default PagesBlock;