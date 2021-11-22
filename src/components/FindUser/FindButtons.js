import React from 'react';
import styled from 'styled-components';
//components
import MainButton from '../Styled/MainButton';
import BtnBlock from '../Styled/BtnBlock';
//styled
const FindBtn = styled(MainButton)`
    padding: 5px;
    border-radius: 2px;
`;

const FindButtons = ({ disableFind, reset }) => (
    <BtnBlock>
        <FindBtn type="submit"
            form="findUser"
            disabled={disableFind}
        >
            Find
        </FindBtn>
    <FindBtn onClick={reset}>Reset</FindBtn>
    </BtnBlock>
)
export default FindButtons;