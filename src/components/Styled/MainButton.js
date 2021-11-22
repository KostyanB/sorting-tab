import styled from 'styled-components';

const MainButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    color: ${props => props.disabled ? '#a3a3a3' : 'black'};

    &:hover, :active {
        background-color: ${props => props.disabled ? 'lightgray' : 'gray'};
    }
    &:hover {
        color: ${props => props.disabled ? '#a3a3a3' : '#2796FF'};
    }
    &:active {
        color: ${props => props.disabled ? '#a3a3a3' : 'white'};
    }
`;
export default MainButton;