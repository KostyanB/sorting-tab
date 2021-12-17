import React from 'react';
import styled from 'styled-components';
//components
import MainButton from '../Styled/MainButton';
import BtnWrapper from '../Styled/BtnWrapper';
//styled
const FindBtn = styled(MainButton)`
    padding: 5px;
    border-radius: 2px;
`;

const FindButtons = ({ disableFind, reset }) => (
    <BtnWrapper>
        <FindBtn type="submit"
            form="findUser"
            disabled={disableFind}
        >
            Find
        </FindBtn>
    <FindBtn onClick={reset}>Reset</FindBtn>
    </BtnWrapper>
)
export default FindButtons;