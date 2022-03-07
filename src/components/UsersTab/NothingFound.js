import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { User } from '../Styled/TabComponents';

const Wrap = styled.tr`
  height: 50px;
`;
const Message = styled.div`
  color: ${env.style.loaders.errorText};
`;

const NothingFound = () => (
  <Wrap>
    <User>
      <Message>Nothing found</Message>
    </User>
  </Wrap>
);
export default NothingFound;
