import axios from 'axios';

function getRandomUser(usercount=1) {
    return axios.get('https://randomuser.me/api/?results=' + usercount)
        .then(({data}) => {
            return data;
        })
        .catch(err => {
            console.log({err});
        })
}

export default getRandomUser;