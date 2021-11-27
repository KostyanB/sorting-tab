import styled from 'styled-components';
import env from '../../env.json';
//style-var
const {
    border,
    tabHoverColor
} = env.style.tab;

export const Item = styled.td`
    border-right: ${border};
    width: min(50px, 5vw);

    &:last-of-type {
        border: none;
    }
`;

export const User = styled.th`
    position:absolute;
    border: none;
    color: ${tabHoverColor};
    left:0;
    width: 200px;
    padding-left: 15px;
    white-space: nowrap;

    @media(max-width: 576px){
        width: 150px;
        white-space: normal;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const Total = styled.th`
    position:absolute;
    border: none;
    color: ${tabHoverColor};
    right: 0;
    width: 80px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 576px) {
        width: 70px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
        color: ${tabHoverColor};
    }
`;