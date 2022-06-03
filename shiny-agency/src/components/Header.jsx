import { Container, Logo, MainLogo, LogoTxt, Nav, SLink } from './Header.styles'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import logoTxt from '../images/logoTxt.png';

function Header() {
    return (
        <Container>
            <Link to="/">                    
                <Logo>                    
                    <MainLogo src={logo} alt=''/>
                    <LogoTxt src={logoTxt} alt='Shiny'/>
                </Logo>
            </Link>
            <Nav>
                <SLink to="/">Accueil</SLink>
                <SLink to="/freelances">Profils</SLink>
                <SLink to="/survey/1" $highlighted>Faire le test</SLink>
            </Nav>
        </Container>
    )
}

export default Header;
 