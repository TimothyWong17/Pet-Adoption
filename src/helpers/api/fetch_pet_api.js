function fetchPetAPI(formState) {
	const API_KEY = 'sYUzbXi2CE8X3WgIhY4F8hwdy2gPbYdH8iCpX7iKQVA05RNGlH';
	const SECRET_KEY = '3Gz3NZx1oMLLabO6CIiXWGmcZbRmF334t13VNzz4';


	// formState.breed
	// formState.gender
	// formState.age
	// formState.location
	// formState.distance
	
	
	//API Parameters
	const status = 'adoptable'
	const type = 'dog'
	//const age = 'baby'
	
	// Call the API
	// This is a POST request, because we need the API to generate a new token for us
	return fetch('https://api.petfinder.com/v2/oauth2/token', {
		method: 'POST',
		body: 'grant_type=client_credentials&client_id=' + API_KEY + '&client_secret=' + SECRET_KEY,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then( resp  => resp.json())
	  .then(data => {
		//console.log('token', data)
		
		return fetch('https://api.petfinder.com/v2/animals?type=' + type + '&status=' + status + '&breed=' + formState.breed + '&gender=' + formState.gender + '&age=' + formState.age + '&location=' + formState.location + '&distance=' + formState.distance, {
			headers: {
				'Authorization': data.token_type + ' ' + data.access_token,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	
	}).then(resp => resp.json())
	  .catch(err => console.log('something went wrong', err));
}



export default fetchPetAPI;


