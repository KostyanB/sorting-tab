import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import env from '../../env.json';
//recoil state
import { activePageState } from '../../recoilStore/showTabStore';

const activeColor = env.style.hoverColor;
//styled
const PagesWrap = styled.div`
  grid-area: pag;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;
const Item = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: ${props => props.color};

  &:hover,
  :active {
    color: ${activeColor};
  }
`;

const RepeatItem = props => {
  const { count, ...otherProps } = props;
  const items = [];

  for (let index = 1; index <= count; index++) {
    items.push(props.children({ index, otherProps }));
  }
  return <>{items}</>;
};

const PagesBlock = ({ pagesCount }) => {
  const [activePage, setActivePage] = useRecoilState(activePageState);

  const setActiveColor = (index, activePage) =>
    index === activePage ? activeColor : 'inherit';

  return (
    <PagesWrap>
      <RepeatItem count={pagesCount} activePage={activePage}>
        {({ index, otherProps }) => (
          <Item
            key={index}
            color={setActiveColor(index, otherProps.activePage)}
            onClick={() => setActivePage(index)}
          >
            {index}
          </Item>
        )}
      </RepeatItem>
    </PagesWrap>
  );
};
export default PagesBlock;
