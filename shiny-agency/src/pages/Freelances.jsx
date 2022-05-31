import { useEffect, useState } from 'react';
import getRandomUser from '../api/randomuser';
import Card from '../components/Card'
import MainContainer from '../components/MainContainer';
import { CardContainer } from './Freelances.styles';

function Freelances() {

    const [freelanceArr, setFreelanceArr] = useState([]);

    useEffect(() => {
        getRandomUser(10).then(data => setFreelanceArr(data.results));
    }, []);
 
    return (
        <MainContainer>
            <h1>Freelances :o</h1>
            <CardContainer>
            {freelanceArr.map((profile) => (
                <Card 
                    key={`${profile.email}-${profile.login.uuid}`}
                    username={`${profile.name.first} ${profile.name.last}`}
                    img={profile.picture.large}
                    country={profile.location.country}
                />
            ))}
            </CardContainer>
        </MainContainer>
    )
}

export default Freelances