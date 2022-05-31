import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../utils/styles/colors';

export const Container = styled.div``

export const Nav = styled.nav`
    height: 2rem;
    display: flex;
    align-items: center;
`

export const SLink = styled(Link)`
    padding: 0.7rem 0.8rem 0.8rem 0.8rem;
    line-height: 1;
    color: ${colors.textLight};
    ${(props) =>
        props.$highlighted &&
        `color: ${colors.textDark}; background: ${colors.primary}; `}
`