import styled from 'styled-components';

export const Row = styled.ul`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 200px 1fr 80px;
    padding-top: 5px;
    padding-bottom: 5px;
    column-gap: 5px;

    @media(max-width: 576px){
        grid-template-columns: 150px 1fr 70px;
    }
`;

export const ItemWrap = styled.li`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(31, minmax(60px, 1fr));
`;

export const Item = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gray;

    &:last-of-type {
        border: none;
    }
`;

const Li = styled.li`
    position:absolute;
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    border: none;
    color: #2796FF;
`;

export const User = styled(Li)`
    left:0;
    justify-content: flex-start;
    width: 200px;
    padding-left: 15px;
    white-space: nowrap;

    @media(max-width: 576px){
        width: 150px;
        white-space: normal;
    }
`;

export const Total = styled(Li)`
    right: 0;
    justify-content: center;
    width: 80px;
    padding-left: 5px;

    @media(max-width: 576px) {
        width: 70px;
    }
`;

export const Sort = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-left: 5px;
    width: 10px;
    height: 30px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
        color: #2796FF;
    }
`;