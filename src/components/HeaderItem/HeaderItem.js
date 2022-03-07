import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
//components
import { Button } from '../Styled/TabComponents';
import HeaderItemSort from './HeaderItemSort';
//recoil state
import { openModalState, activeDateState } from '../../recoilStore/modalStore';
//styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = ({ text, name, title }) => {
  const setOpenModal = useSetRecoilState(openModalState);
  const setActiveDate = useSetRecoilState(activeDateState);

  const showModal = date => {
    if (date) {
      setActiveDate(date);
      setOpenModal(true);
    }
  };

  return (
    <Wrapper>
      <Button onClick={() => showModal(title, text)} title={title}>
        {text}
      </Button>
      <HeaderItemSort name={name} />
    </Wrapper>
  );
};
export default HeaderItem;
