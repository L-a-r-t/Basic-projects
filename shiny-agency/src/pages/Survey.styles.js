import styled from 'styled-components';
import colors from '../utils/styles/colors';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 300px;
    text-align: center;
`

export const QuestionID = styled.h2`
    border-bottom: 2px solid ${colors.primary};
`

export const Answers = styled.div`
    display: flex; 
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const Answer = styled.button`
    padding: 1.5rem 4rem;
    margin: 0 1rem;
    border: 1px solid white;
    background-color: ${colors.backgroundLight};
    border-radius: 2rem;
    transition: 0.3s ease-out;
    &:hover {
        cursor: pointer;
        border: 1px solid ${colors.primary};
        font-weight: bold;
    }
`

export const NavLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const NavLink = styled(Link)`
    color: ${colors.textLight};
    width: 7rem;
`