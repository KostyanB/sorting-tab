import React from 'react';
import MainButton from '../MainButton';

const ResetButton = ({ clickFunction }) => {
  const btnStyle = { padding: 5, border: 2 };

  return (
    <MainButton
      clickFunction={clickFunction}
      text='Reset'
      btnStyle={btnStyle}
    />
  );
};
export default ResetButton;
