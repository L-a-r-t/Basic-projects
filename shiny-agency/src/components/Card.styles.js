import styled from 'styled-components';
import colors from '../utils/styles/colors';

export const Username = styled.p`
    font-size: 1rem;
    width: 100%;
    font-weight: bold;
    text-align: left;
    margin: -1rem 0 0 0;
    color: ${colors.primary};
`

export const Container = styled.div`
    width: 340px;
    height: 340px;
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.backgroundLight};
    &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    }
`

export const Image = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

export const Country = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 0 0 -1rem 0;
`