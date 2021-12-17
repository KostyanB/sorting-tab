import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/usersTabStore';
//components
import MainButton from '../Styled/MainButton';
import BtnWrapper from '../Styled/BtnWrapper';
//styled
const Wrapper = styled(BtnWrapper)`
  grid-area: ${props => props.areaName};
`;
const Button = styled(MainButton)`
    padding: 10px;
    border-radius: 5px;
`;

const ButtonsBlock = ({ numForDisable, leftBtnFn, rightBtnFn, areaName, text }) => {
  const [ disableBlock, setDisableBlock ] = useState(false);
  const activePage = useRecoilValue(activePageState);
  const [ leftText, rightText ] = text;

  useEffect(() => {
      const isPrevDisable = (activePage === numForDisable) ? true : false;
      setDisableBlock(isPrevDisable);
  }, [numForDisable, activePage]);

	return (
    <Wrapper areaName={areaName}>
      <Button onClick={leftBtnFn}
          disabled={disableBlock}
      >
        {leftText}
      </Button>
      <Button onClick={rightBtnFn}
          disabled={disableBlock}
      >
        {rightText}
      </Button>
    </Wrapper>
	);
}
export default ButtonsBlock;