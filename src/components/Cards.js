import React from "react";
import Card from './Card';

function Cards({ tours }) {
    return (
        <div>
            {tours.map((tour) => (
                <Card key={tour.id} tour={tour} />
            ))}
        </div>
    );
}

export default Cards;
