import styled from 'styled-components';
import env from '../../env.json';
//style-var
const { hoverColor } = env.style;

export const Item = styled.td`
  border-right: 1px solid #808080;
  width: min(50px, 5vw);

  &:last-of-type {
    border: none;
  }
`;

const Th = styled.th`
  position: absolute;
  border: none;
  color: ${hoverColor};
  vertical-align: middle;
  cursor: default;
`;

export const User = styled(Th)`
  left: 0;
  width: 200px;
  padding-left: 15px;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 576px) {
    width: 150px;
    white-space: normal;
  }

  & > div {
    justify-content: flex-start;
  }
`;

export const Total = styled(Th)`
  right: 0;
  width: 100px;
  text-align: center;

  @media (max-width: 576px) {
    width: 80px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.cursor};

  &:hover,
  &:active {
    color: ${hoverColor};
  }
`;
