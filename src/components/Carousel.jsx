import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({ images}) {
    const [ currentIndex, setCurrentIndex ]=useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    if (images.length === 1) {
        return (
            <div className="carousel">
                <img src={images[0]} alt="carousel" />
            </div>
        );
    }

    return (
        <div className="carousel">
          
            <FaChevronLeft className="carousel-arrow left" onClick={handlePrevClick} />
            <img src={images[currentIndex]} alt="carousel" />
            <FaChevronRight className="carousel-arrow right" onClick={handleNextClick} />
            <div className="carousel-indicators">
                    <span>
                       {currentIndex + 1}/{images.length}
                    </span>
            </div>
        </div>
    );
}

export default Carousel;