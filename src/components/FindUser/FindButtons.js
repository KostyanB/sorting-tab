import React from 'react';
//components
import MainButton from '../MainButton';
import BtnWrapper from '../Styled/BtnWrapper';

const FindButtons = ({ disableFind, reset }) => {
  const btnStyle = { padding: 5, border: 2 };
  const findBtnStyle = { type: 'submit', form: 'findUser', ...btnStyle };

  return (
    <BtnWrapper>
      <MainButton text="Find" isDisable={disableFind} btnStyle={findBtnStyle} />
      <MainButton clickFunction={reset} text="Reset" btnStyle={btnStyle} />
    </BtnWrapper>
  );
};
export default FindButtons;
