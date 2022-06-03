import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../utils/styles/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.1rem;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
`

export const MainLogo = styled.img`
    height: 3rem;
`

export const LogoTxt = styled.img`
    height: 2rem;
    margin-left: 1rem;
`

export const Nav = styled.nav`
    height: 3rem;
    display: flex;
    align-items: center;
    float: inline-end;
`

export const SLink = styled(Link)`
    padding: 0.7rem 0.8rem 0.8rem 0.8rem;
    line-height: 1;
    color: ${colors.textLight};
    text-decoration: none;
    ${(props) =>
        props.$highlighted &&
        `color: ${colors.textDark}; background: ${colors.primary}; border-radius: 2rem; margin: 0 0.8rem; `}
`