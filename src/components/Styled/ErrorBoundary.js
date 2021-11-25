import React from 'react';
import styled from 'styled-components';



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
            return this.props.fallback;
            // return <>Ошибка: {this.state.error.message}</>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;