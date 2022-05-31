import { Container, Nav, SLink } from './Header.styles'

function Header() {
    return (
        <Container>
            <Nav>
                <SLink to="/">Home</SLink>
                <SLink to="/survey/1">Survey</SLink>
                <SLink to="/freelances" $highlighted>Freelances</SLink>
            </Nav>
        </Container>
    )
}

export default Header;
 