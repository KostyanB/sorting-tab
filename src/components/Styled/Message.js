import styled from 'styled-components';
import env from '../../env.json';

const { messageTextColor } = env.style.modal;

const Message = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: ${messageTextColor};
    font-size: 2em;
    text-align: center;
`;
export default Message;