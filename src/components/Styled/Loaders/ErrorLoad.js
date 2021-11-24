import styled from 'styled-components';
import Container from '../Container';
import env from '../../../env.json';
//style-var
const { errorText } = env.style.loaders;

const ErrorContainer = styled(Container)`
    flex-direction: column;
    padding-top: 50px;
    color: ${errorText};
    font-size: 30px;
    text-align: center;
`;

const ErrorLoad = ({ text = 'nework error' }) => (
    <ErrorContainer>
        <p>Sorry, error: "{text}"</p>
        <p>We will fix it soon...</p>
    </ErrorContainer>
);
export default ErrorLoad;