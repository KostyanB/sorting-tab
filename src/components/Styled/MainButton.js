import styled from 'styled-components';
import env from '../../env.json';
//style-var
const {
    hoverColor,
    mainTextColor,
    button: {
        btnBackMain,
        btnBackHover,
        btnBackDis,
        btnTextActive
    }
} = env.style;

const MainButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${btnBackMain};
    color: ${props => props.disabled ? '' : mainTextColor};

    &:hover, :active {
        background-color: ${props => props.disabled ? btnBackMain : btnBackHover};
    }
    &:hover {
        color: ${props => props.disabled ? btnBackDis : hoverColor};
    }
    &:active {
        color: ${props => props.disabled ? btnBackDis : btnTextActive};
    }
`;
export default MainButton;