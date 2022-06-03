import { Wrapper, HeadWrapper, Header, Em } from './Results.styles';
import CTA from '../components/CTA';

function Results() {
    return (
        <Wrapper>
            <HeadWrapper>
                <Header>Les compétences dont vous avez besoin :  <Em>UX Design, frontend, backend</Em></Header>
                <CTA to='/freelances' text='Découvrez nos profils'/>
            </HeadWrapper>
            <p><Em>UX Design</Em><br/>
Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <p><Em>Frontend</Em><br/>
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            <p><Em>Backend</Em><br/>
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Wrapper>
    )
}

export default Results