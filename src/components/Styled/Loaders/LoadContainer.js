import styled from 'styled-components';
import env from '../../../env.json';
//style-var
const { backColor } = env.style.loaders;

const LoadContainer = styled.div`
    width: 100%;
    height: 100%;
    /* position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0; */
    background: ${backColor};
    z-index: 1001;
    /* height: 100vh; */
`;
export default LoadContainer;