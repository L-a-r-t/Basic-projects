import { Container, Name, Image, Job } from './Card.styles';

function Card({name, img, job}) {
    return (
        <Container>
            <Name>{name}</Name>
            <Image src={img} alt={name + 'profile pic'}/>
            <Job>{job}</Job>
        </Container>
    )
}
 
export default Card;
