import styled from 'styled-components';
import colors from '../utils/styles/colors';

export const Wrapper = styled.div`
    margin: 1rem 2rem 0 2rem;
    padding: 2rem 300px;
    height: calc(100vh - 96px);
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Img404 = styled.img`
    width: 100%;
`