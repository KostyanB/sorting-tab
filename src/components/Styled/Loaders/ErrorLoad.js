import styled from 'styled-components';
import LoadContainer from './LoadContainer';

const ErrorContainer = styled(LoadContainer)`
    padding-top: 200px;
    color: red;
    font-size: 30px;
    text-align: center;
`;

const ErrorLoad = ({ text = 'nework error' }) => (
    <ErrorContainer>
        Sorry, error: "{text}". We will fix it soon...
    </ErrorContainer>
);
export default ErrorLoad;