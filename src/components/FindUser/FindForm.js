import React from 'react';
import styled from 'styled-components';
//styled
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  padding: 5px;
`;

const FindForm = ({ inputValue, changeInput }) => (
  <Label htmlFor='find'>
    Filter User by name/surname or id
    <Input type='text' id='find' value={inputValue} onChange={changeInput} />
  </Label>
);
export default FindForm;
