import React from 'react';
import styled from 'styled-components';
//styled
const Form = styled.form`
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

const FindForm = ({ inputValue, showUser, changeInput }) => (
    <Form id="findUser"
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
    </Form>
);
export default FindForm;