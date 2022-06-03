import styled from 'styled-components';
import colors from '../utils/styles/colors';
import { Link } from 'react-router-dom';

export const CTAStyle = styled(Link)`
    padding: 0.5rem 2rem;
    line-height: 1;
    text-decoration: none;
    color: ${colors.textDark};
    background: ${colors.primary}; 
    border-radius: 2rem;
    min-width: 8rem;
`