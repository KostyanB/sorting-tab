import styled from 'styled-components';
import LoadContainer from './LoadContainer';
import env from '../../../env.json';
//style-var
const { errorText } = env.style.loaders;

const ErrorContainer = styled(LoadContainer)`
    padding-top: 200px;
    color: ${errorText};
    font-size: 30px;
    text-align: center;
`;

const ErrorLoad = ({ text = 'nework error' }) => (
    <ErrorContainer>
        Sorry, error: "{text}". We will fix it soon...
    </ErrorContainer>
);
export default ErrorLoad;