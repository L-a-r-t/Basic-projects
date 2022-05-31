import { Container, Username, Image, Country } from './Card.styles';

function Card({username, img, country}) {
    return (
        <Container>
            <Username>{username}</Username>
            <Image src={img} alt={username + 'profile pic'}/>
            <Country>{country}</Country>
        </Container>
    )
}
 
export default Card;
