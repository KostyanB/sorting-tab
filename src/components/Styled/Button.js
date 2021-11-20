import styled from 'styled-components';

const Button = styled.button`
    background-color: none;
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    text-align: inherit;
    text-transform: inherit;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
        color: #2796FF;
    }
`;
export default Button;