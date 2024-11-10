import React from 'react';

function Banner({ img }) {
    return (
        <div className="banner">
            <img src={ img } alt="banner"></img>
        </div>
    );
}

export default Banner;