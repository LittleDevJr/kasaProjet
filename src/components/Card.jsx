import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, subtitle, id }) {
    return (
        <Link to={`/appartement/${id}`} className="card" >
            <img src={image} alt={subtitle} />
            <p>{subtitle}</p>
        </Link>
    );
}

export default Card;