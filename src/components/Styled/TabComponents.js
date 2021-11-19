import styled from 'styled-components';

export const Items = styled.ul`
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

export const User = styled.li`
    position:absolute;
    left:0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    white-space: nowrap;
    border: none;

    @media(max-width: 576px){
        width: 150px;
        white-space: normal;
    }
`;

export const Total = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position:absolute;
    right:0;
    width:80px;
    border: none;

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