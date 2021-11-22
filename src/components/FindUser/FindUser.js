import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
//store
import {
    findUserStatistic,
    resetStatistic
} from '../../store/userDataSlice';
//components
import Container from '../Styled/Container';
import FindForm from './FindForm';
import FindButtons from './FindButtons';
//styled
const Wrapper = styled(Container)`
    margin-top: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const FindUser = () => {
    const dispatch = useDispatch();
    const [ disableFind, setDisableFind ] = useState(true);
    const [ inputValue, setInputValue ] = useState('')

    useEffect(() => {
        const isFindDisable = inputValue ? false : true;
        setDisableFind(isFindDisable);
    }, [inputValue]);

    const showUser = (e) => {
        e.preventDefault();
        inputValue && dispatch(findUserStatistic(inputValue));
    };

    const reset = () => {
        dispatch(resetStatistic());
        setInputValue('');
    };

    const changeInput = e => setInputValue(e.target.value);

	return (
        <Wrapper>
            <FindForm inputValue={inputValue}
                showUser={showUser}
                changeInput={changeInput}
            />
            <FindButtons disableFind={disableFind}
                reset={reset}
            />
        </Wrapper>
	);
}
export default FindUser;