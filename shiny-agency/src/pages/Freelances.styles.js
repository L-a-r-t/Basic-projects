import styled from 'styled-components';

export const MainContainer = styled.div`
    text-align: center;
    line-height: 3;
`

export const CardContainer = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: fit-content;
`

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`