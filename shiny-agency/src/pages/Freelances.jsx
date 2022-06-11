import { useEffect, useState } from 'react';
import getRandomUser from '../apis/randomuser';
import Card from '../components/Card'
import { Loader } from '../utils/styles/atoms';
import { MainContainer, CardContainer, Center } from './Freelances.styles';

function Freelances() {

    const [freelanceArr, setFreelanceArr] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:8000/freelances');
                const {freelancersList} = await res.json();
                console.log(freelancersList);
                setFreelanceArr(freelancersList);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false)
            }
        })()
        getRandomUser(10).then(data => setFreelanceArr(data.results));
    }, []);
 
    return (
        <MainContainer>
            <h2>Trouvez votre prestataire</h2>
            <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
            {
                isLoading
                ? <Center><Loader /></Center>
                :
            <CardContainer>
            {freelanceArr.map((profile) => (
                <Card 
                    key={`${profile.id}-${profile.name}`}
                    name={profile.name}
                    img={profile.picture}
                    job={profile.job}
                />
            ))}
            </CardContainer>
            }
        </MainContainer>
    )
}

export default Freelances