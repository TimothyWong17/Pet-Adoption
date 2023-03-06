import React from "react";
import './AnimalCards.css';
import AnimalCard from "../AnimalCard/AnimalCard";

const AnimalCards = ({animals}) => {
    return (
        <div className="grid">
        {animals.map((animal) => {
            return (
                <AnimalCard animal={animal} />
            )
        })}
        </div>
    )
}

export default AnimalCards;