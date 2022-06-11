import { useEffect, useState } from 'react';
import getRandomUser from '../apis/randomuser';
import Card from '../components/Card'
import { MainContainer, CardContainer } from './Freelances.styles';

function Freelances() {

    const [freelanceArr, setFreelanceArr] = useState([]);

    useEffect(() => {
        getRandomUser(10).then(data => setFreelanceArr(data.results));
    }, []);
 
    return (
        <MainContainer>
            <h2>Trouvez votre prestataire</h2>
            <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
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