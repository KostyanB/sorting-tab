import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { User } from '../Styled/TabComponents';

const Wrap = styled.tr`
  height: 50px;
`;
const Message = styled(User)`
  color: ${env.style.errorText};
`;

const NothingFound = () => (
  <Wrap>
    <Message>Nothing found</Message>
  </Wrap>
);
export default NothingFound;
