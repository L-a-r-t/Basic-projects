import { Wrapper, Img404 } from './404.styles';
import image from '../images/404.svg';

function PageNotFound() {
    return (
        <Wrapper>
            <h1>Oups...</h1>
            <Img404 src={image} alt='Erreur 404' />
        </Wrapper>
    )
}

export default PageNotFound;