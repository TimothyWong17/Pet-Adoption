function fetchPetBreeds() {

    const API_KEY = 'sYUzbXi2CE8X3WgIhY4F8hwdy2gPbYdH8iCpX7iKQVA05RNGlH';
    const SECRET_KEY = '3Gz3NZx1oMLLabO6CIiXWGmcZbRmF334t13VNzz4';
    
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