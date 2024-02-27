import { useState } from "react";

function Card({tour, remove})
{
    const[readmore, setReadMore] = useState(false)
    const description = readmore ? tour.info : `${tour.info.substring(0, 200)}`
    function handleClick()
    {
        setReadMore(!readmore)
    }

    function removeCard()
    {
        remove(tour.id)
    }
    return (
        <div className = "mainCard">
            <img src={tour.image} className="card-image"></img>
            <p className="card-price">₹ {tour.price}</p>
            <p className="card-name">{tour.name}</p>
            <div>
                <p className="card-info">{description}
                <span onClick={handleClick} className="card-details">{readmore ? "Show less" : "...Read More" }</span>
                </p>
            </div>

            <button onClick = {removeCard} className="not-interested">Not Interested</button>
        </div>
    );
}

export default Card;