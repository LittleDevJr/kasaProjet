
import React, { useState } from "react";
import Data from "../data/data.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Background0 from "../assets/Background0.png";
import Carousel from "../components/Carousel";
import { FaStar } from 'react-icons/fa';
import Collapse from "../components/Collapse";


function Home() {
    const [selectedImages, selectedItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
   


    

    let content;
    if (selectedImages) {
        const currentItem = Data.find(item => item.pictures === selectedImages);
        content = (
            <div className="carousel-container">
                <Carousel images={selectedImages} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <div className="infoCarousel">
                    <div className="title-location-tags">
                    <h2>{currentItem.title}</h2>
                    <h4>{currentItem.location}</h4>
                    <div className="tags">
                        {currentItem.tags.map((tag, index) => (
                            <span key={index} className="tag-bubble">{tag}</span>
                        ))}
                    </div>
                    </div>
                    <div className="host-ratings">
                    <div className="hostName-hostPicture">
                        <p className="hostName">{currentItem.host.name}</p>
                        <img className="hostPicture" src={currentItem.host.picture}></img>
                    </div>
                    <div className="rating">
                        {[...Array(5)].map((star, index) => {
                            if (index < rating) {
                                return <FaStar key={index} className="star star-filled" />;
                            } else {
                                return <FaStar key={index} className="star star-empty" />;
                            }
                        })}
                    </div>
                    </div>
                </div>
                <div className="homeCollapse">
                    <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Description">
                        {selectedItem.description}
                    </Collapse>
                    <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Equipements">
                        <ul> {selectedItem.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}

                        </ul>
                    </Collapse>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="home-content">
                <Banner img={Background0} title="Chez vous, partout et ailleurs" />
                <div className="card-container">
                    {Data.map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            image={item.cover}
                            subtitle={item.title}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Home;