import React from 'react';

function Card({ image, subtitle, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={subtitle} />
            <p>{subtitle}</p>
        </div>
    );
}

export default Card;