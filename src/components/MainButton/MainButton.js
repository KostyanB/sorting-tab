import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
//style-var
const {
  hoverColor,
  mainTextColor,
  button: { btnBackMain, btnBackHover, btnBackDis, btnTextActive },
} = env.style;

const Button = styled.button.attrs(props => ({
  disabled: props.disabled,
  type: props.type,
  form: props.form,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${btnBackMain};
  color: ${props => (props.disabled ? btnBackDis : mainTextColor)};
  padding: ${props => props.padding}px;
  border-radius: ${props => props.border}px;

  &:hover,
  :active {
    background-color: ${props => (props.disabled ? btnBackMain : btnBackHover)};
  }
  &:hover {
    color: ${props => (props.disabled ? btnBackDis : hoverColor)};
  }
  &:active {
    color: ${props => (props.disabled ? btnBackDis : btnTextActive)};
  }
`;

const MainButton = ({ text, isDisable, clickFunction, btnStyle }) => {
  const [disableButton, setDisableButton] = useState(false);
  const { padding, border, type, form } = btnStyle;

  useEffect(() => setDisableButton(isDisable), [isDisable]);

  return (
    <Button
      onClick={clickFunction}
      disabled={disableButton}
      padding={padding}
      border={border}
      type={type}
      form={form}
    >
      {text}
    </Button>
  );
};
export default MainButton;
