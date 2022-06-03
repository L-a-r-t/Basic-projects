import styled from 'styled-components';
import colors from '../utils/styles/colors';
import { Link } from 'react-router-dom';

export const Hero = styled.div`
    margin: 1rem 2rem 0 2rem;
    padding: 2rem 2rem 6rem 2rem;
    height: calc(100vh - 96px);
    background-color: ${colors.backgroundLight};
    display: flex;
    justify-content: space-evenly;
`

export const HeroText = styled.h2`
    font-size: 2rem;
    line-height: 2;
`

export const HeroImg = styled.img`
    max-height: 500px;
`

export const CTA = styled(Link)`
    padding: 0.8rem 3rem;
    line-height: 1;
    color: ${colors.textLight};
    text-decoration: none;
    ${(props) =>
        props.$highlighted &&
        `color: ${colors.textDark}; background: ${colors.primary}; border-radius: 2rem; `}
`