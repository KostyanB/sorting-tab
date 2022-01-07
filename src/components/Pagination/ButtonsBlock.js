import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/showTabStore';
//components
import BtnWrapper from '../Styled/BtnWrapper';
import MainButton from '../MainButton';
//styled
const Wrapper = styled(BtnWrapper)`
  grid-area: ${props => props.areaName};
`;

const ButtonsBlock = ({
  pageNumForDisableBtn,
  handleBtnFunctions,
  areaName,
  btnTexts,
}) => {
  const [leftText, rightText] = btnTexts;
  const [handleLeftBtn, handleRightBtn] = handleBtnFunctions;

  const paginationBtnStyle = { padding: 10, border: 5 };

  const activePage = useRecoilValue(activePageState);
  const isBlockDisable = activePage === pageNumForDisableBtn ? true : false;

  return (
    <Wrapper areaName={areaName}>
      <MainButton
        text={leftText}
        isDisable={isBlockDisable}
        clickFunction={handleLeftBtn}
        btnStyle={paginationBtnStyle}
      />
      <MainButton
        text={rightText}
        isDisable={isBlockDisable}
        clickFunction={handleRightBtn}
        btnStyle={paginationBtnStyle}
      />
    </Wrapper>
  );
};
export default ButtonsBlock;
