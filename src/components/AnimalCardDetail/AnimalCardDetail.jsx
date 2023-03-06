import React from "react";
import './AnimalCardDetail.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const AnimalCardDetail = ({animal, trigger, setTrigger}) => {
    return (trigger) ? (
    <div className="animal-detail">
        <div className="animal-detail-inner">
        <Container>
            <Image src={animal.primary_photo_cropped['small']} height='300' width='300'/>
            <h1>{animal.name}</h1>
            <Row>
            <Col>
                <h6>Breed:</h6>
                <p>{`${animal.breeds['primary']}, ${animal.breeds['secondary']}`}</p>
            </Col>
            <Col>
                <h6>Colors:</h6>
                <p>{`${animal.colors['primary']}, ${animal.colors['secondary']}`} </p>
            </Col>
            <Col>
                <h6>Age:</h6>
                <p>{animal.age}</p>
            </Col>
            </Row>
            <Row>
            <Col>
                <h6>Size:</h6>
                <p>{animal.size}</p>
            </Col>
            <Col>
                <h6>Gender:</h6>
                <p>{animal.gender}</p>
            </Col>
            <Col>
                <h6>Coat:</h6>
                <p>{animal.coat}</p>
            </Col>
            </Row>
            <Row>
            <h6>Description:</h6>
            <p>{animal.description}</p>
            <a href={animal.url} target="_blank">Check out {animal.name}'s Adoption Page</a>
            </Row>
            <Button variant="primary" className="close-btn" onClick={() => {setTrigger(false)}}>Close</Button>
        </Container>
        </div>
    </div>
    ) : "";
}

export default AnimalCardDetail;