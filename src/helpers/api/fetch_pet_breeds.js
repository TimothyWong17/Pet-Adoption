function fetchPetBreeds() {

    const API_KEY = 'xOVOSlxdirrDHeMi7zL5Jio60W4V84hskzMzWRCIiZFe1hPjDP';
    const SECRET_KEY = 'ziFfLLuslE6sD87nzk4jeSQvXp8EHsLQxpKUwIeh';
    
    return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + API_KEY + '&client_secret=' + SECRET_KEY,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then( resp  => resp.json())
      .then(data => {
        //console.log('token', data)
        
        return fetch('https://api.petfinder.com/v2/types/dog/breeds', {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    
    }).then(resp => resp.json())
      .catch(err => console.log('something went wrong', err));


}

export default fetchPetBreeds;