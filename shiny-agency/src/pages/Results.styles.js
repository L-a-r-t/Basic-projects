import styled from 'styled-components';
import colors from '../utils/styles/colors';

export const Wrapper = styled.div`
    margin: 1rem 2rem 0 2rem;
    padding: 2rem 300px;
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeadWrapper = styled.div`
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
`

export const Header = styled.h2`
    margin-bottom: 3.5rem;
`

export const Em = styled.span`
    color: ${colors.primary};
`