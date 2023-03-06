import React, { useState, useEffect } from "react";
import './AnimalCard.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AnimalCardDetail from "../AnimalCardDetail/AnimalCardDetail";


const AnimalCard = ({animal}) => {
  const [buttonPopup, setButtonPopup] = useState(false);
 

 return (
    <>
    <Card style={{ width: '18rem' }} bg='light' text='dark' className='box' >
      { animal.primary_photo_cropped === null ? <p>No Image</p> : <Card.Img variant="top" src={animal.primary_photo_cropped['full']} height='300' width='300'/>}
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
       {animal.primary_photo_cropped === null ? "No Animal Details" : <Button variant="primary" onClick={() => {setButtonPopup(true)}}>More Details</Button>}
           
      </Card.Body>
    </Card> 

    <AnimalCardDetail animal={animal} trigger={buttonPopup} setTrigger={setButtonPopup}/>   
  </>
    

 )
}

export default AnimalCard