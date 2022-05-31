import styled from 'styled-components';
import colors from '../utils/styles/colors';

export const Username = styled.span`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 2rem;
    background-color: ${colors.backgroundLight};
    &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    }
`

export const Image = styled.img`
    width: 90px;
`

export const Country = styled.span`
    font-size: 1rem;
    text-align: center;
`