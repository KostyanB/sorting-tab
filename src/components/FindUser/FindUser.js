import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
//store
import {
    findUserStatistic,
    resetStatistic
} from '../../store/statisticOnPageSlice';
//components
import Container from '../Styled/Container';
import Button from '../Styled/Button';
//styled
const Wrapper = styled(Container)`
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
const FindForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 440px) {
        flex-direction: column;
    }
`;
const Input = styled.input`
    padding: 5px;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;
const FindBtn = styled(Button)`
    padding: 5px;
    background-color: lightgray;

    &:hover, :active {
        background-color: gray;
    }
`;

//  ****************************************************
const FindUser = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const showUser = (e) => {
        e.preventDefault();
        const request = inputRef.current.value;
        request && dispatch(findUserStatistic(request));
    };

    const reset = () => {
        dispatch(resetStatistic());
        inputRef.current.value = '';
    };

	return (
        <Wrapper>
            <FindForm id="findUser"
                onSubmit={e => showUser(e)}
            >
                <label htmlFor="find">
                    Find User by name/surname or id
                </label>
                <Input type="text" id="find" ref={inputRef}/>
            </FindForm>
            <Buttons>
            <FindBtn type="submit"
                form="findUser"
            >
                Find
            </FindBtn>
            <FindBtn onClick={reset}>Reset</FindBtn>
            </Buttons>
        </Wrapper>
	);
}
export default FindUser;