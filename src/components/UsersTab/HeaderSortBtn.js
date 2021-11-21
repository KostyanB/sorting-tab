import React from 'react';
import styled from 'styled-components';
//components
import Button from '../Styled/Button';
//components
import { UpIcon, DownIcon } from '../Styled/Icons/Icons';
//styled
const SortButton = styled(Button)`
    width: 8px;
    height: 8px;
    color: ${props => props.color};

    svg {
        width: 8px;
        height: 8px;
        cursor:pointer;
    }
`;
const Icon = ({name}) => ((name === 'up') ? <UpIcon /> : <DownIcon/>);

const HeaderSortBtn = ({ color, sortingFn, directName }) => {

    return (
            <SortButton onClick={() => sortingFn(directName)}
                color={color}
            >
                <Icon name={directName}/>
            </SortButton>
    );
}
export default HeaderSortBtn;