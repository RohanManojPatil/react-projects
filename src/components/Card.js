function Card({tour})
{
    return (
        <div>
            <img src={tour.image}></img>
            <p>{tour.price}</p>
            <p>{tour.name}</p>
            <div>
                <p>{tour.info}</p>
                <span>Read More</span>
            </div>

            <button>Not Interested</button>
        </div>
    );
}

export default Card;