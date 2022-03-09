import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
//components
import { Button } from '../Styled/TabComponents';
import HeaderItemSort from './HeaderItemSort';
//recoil state
import { activeDateState } from '../../recoilStore/modalStore';
//styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = ({ text, name, title, date }) => {
  const setActiveDate = useSetRecoilState(activeDateState);

  const showModal = () => date && setActiveDate(date);

  return (
    <Wrapper>
      <Button
        onClick={showModal}
        title={title}
        cursor={date ? 'pointer' : 'default'}
      >
        {text}
      </Button>
      <HeaderItemSort name={name} />
    </Wrapper>
  );
};
export default HeaderItem;
