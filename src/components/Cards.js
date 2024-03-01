import React from "react";
import Card from './Card';

function Cards({ tours, remove}) {
    function handleRemove(id)
    {
        remove(id)
    }
    return (
        <div>
            <h1 className="title">Travel Agent</h1>
            <div className="card-container">
            {tours.map((tour) => (
                <Card key={tour.id} tour={tour} remove = {handleRemove}/>
            ))}
        </div>
        </div>
        
    );
}

export default Cards;
