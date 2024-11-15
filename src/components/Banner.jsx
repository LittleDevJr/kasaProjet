import React from 'react';

function Banner({ img, title, bannerClassName }) {
    return (
        <div className={`banner ${bannerClassName}`}>
            <img src={ img } alt='banner'></img>
            <p className="bannerTitle"> {title} </p>
        </div>
    );
}

export default Banner;