import React from 'react';
import './form.css'
import Select from 'react-select';
import Slider from '../slider/slider';
import { useState, useEffect, useRef} from 'react';
import AnimalCards from '../AnimalCards/AnimalCards';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';



const Form = ({petFunction, petBreedFunction}) => {

    const [sliderValue, setSliderValue] = useState(0);
    const [formSubmitErrorMessage, setformSubmitErrorMessage] = useState("");
    const [emptyResultsMessage, setEmptyResultsMessage] = useState("")
    const [breedOptions, setBreedOptions] = useState([])
    const [formResults, setFormResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [formState, setFormState] = useState({
        breed: '',
        gender: '',
        age: '',
        location: '',
        distance: ''
    })

    const petGenderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]

    const petAgeOptions = [
        { value: 'baby', label: 'Baby' },
        { value: 'young', label: 'Young' },
        { value: 'adult', label: 'Adult' },
        { value: 'senior', label: 'Senior' },
    ]

    const dataFetchedRef = useRef(false);
    useEffect(
        () => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            petBreedFunction().then(data => { 
                data['breeds'].forEach((breed) => {
                    setBreedOptions(result => [...result, 
                        {
                            value: breed.name,
                            label:breed.name
                            }
                    ])
                    
                    
                })
            })
        }
    , [])


  //useEffect(() => console.log(formState), [formState])

  const handleChange = (e, type) => {
    setFormState((previousState) => ({
      ...previousState, 
      [type]: e.value,
    }));

    if (type == 'location') {
        setFormState((previousState) => ({
            ...previousState, 
            [type]: e.target.value,
          }));
    }

    if (type == 'distance') {
        setFormState((previousState) => ({
            ...previousState, 
            [type]: e.target.value,
          }));
    }
  };

  const isValidZip = (location) => {
     return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(location);
  }

  

 

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading((prevState) => !prevState)

    if(!isValidZip(formState.location)){
        setLoading((prevState) => !prevState)
        setformSubmitErrorMessage("Invalid US ZipCode")
        return
    }
    setformSubmitErrorMessage("")
    petFunction(formState).then((data) => {
        if(data['animals'].length === 0){
            setLoading((prevState) => !prevState)
            setEmptyResultsMessage("No Search Results")
            return
        } else {
        setEmptyResultsMessage("")
        setFormResults(data['animals'])
        setLoading((prevState) => !prevState)
        }
    })


    
    }
    

    return (
        <>
        {formSubmitErrorMessage &&  <Alert key='danger' variant='danger' className='form-message'> {formSubmitErrorMessage} </Alert>}
        <form onSubmit={handleSubmit} className='form'>
            
            <label htmlFor="breed">Breed:</label>
            <Select options={breedOptions} className='input-select-text' onChange={(e) => handleChange(e, "breed")}/>

            <label htmlFor="gender">Gender: </label>
            <Select options={petGenderOptions} className='input-select-text' onChange={(e) => handleChange(e, "gender")}/>

            <label htmlFor="age">Age: </label>
            <Select options={petAgeOptions} className='input-select-text' onChange={(e) => handleChange(e, "age")}/>


            <label htmlFor="distance">Zipcode: </label>
            <input type="text" pattern="[0-9]*" className='input-text' onChange={(e) => handleChange(e, "location")}/>

            <label htmlFor="distance">Distance(mi) from Zipcode: </label>
            <input type="text"  value={sliderValue} className="slider-input-text" />
            <Slider setSliderValue={setSliderValue} sliderValue={sliderValue} onChange={handleChange}/>

            <input type="submit" className='input-submit' />
            
        </form>
        {emptyResultsMessage &&  <Alert key='warning' variant='warning' className='form-message'> {emptyResultsMessage} </Alert>}
        {/* <AnimalCards animals={formResults} /> */}
        {loading ? <Spinner animation="border" variant="dark" className='submit-loading-spinner'/> : <AnimalCards animals={formResults} />}
        </>

     
    )

}

export default Form;