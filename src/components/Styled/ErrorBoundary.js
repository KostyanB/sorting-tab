import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import env from '../../env.json';
//style-var
const { errorText } = env.style.loaders;
// styled
const ErrorContainer = styled(Container)`
    flex-direction: column;
    padding-top: 50px;
    color: ${errorText};
    font-size: 30px;
    text-align: center;
`;

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }
    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <p>Sorry, error: "{this.state.error.message}"</p>
                    <p>We will fix it soon...</p>
                </ErrorContainer>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;