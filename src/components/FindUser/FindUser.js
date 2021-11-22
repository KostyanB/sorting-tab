import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
//store
import {
    findUserStatistic,
    resetStatistic
} from '../../store/userDataSlice';
//components
import Container from '../Styled/Container';
import MainButton from '../Styled/MainButton';
import BtnBlock from '../Styled/BtnBlock';
//styled
const Wrapper = styled(Container)`
    margin-top: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
const FindForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
const Input = styled.input`
    padding: 5px;
`;
const FindBtn = styled(MainButton)`
    padding: 5px;
    border-radius: 2px;
`;

//  ****************************************************
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
            <FindForm id="findUser"
                onSubmit={e => showUser(e)}
            >
                <label htmlFor="find">
                    Find User by name/surname or id
                </label>
                <Input type="text"
                    id="find"
                    value={inputValue}
                    onChange={e => changeInput(e)}
                />
            </FindForm>
            <BtnBlock>
                <FindBtn type="submit"
                    form="findUser"
                    disabled={disableFind}
                >
                    Find
                </FindBtn>
            <FindBtn onClick={reset}>Reset</FindBtn>
            </BtnBlock>
        </Wrapper>
	);
}
export default FindUser;