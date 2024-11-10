
import React, { useState } from "react";
import Data from "../data/data.json";
import Banner from "../composants/Banner";
import Card from "../composants/Card";
import Background0 from "../assets/Background0.png";
import Carousel from "../composants/Carousel";
import { FaStar } from 'react-icons/fa';
import Collapse from "../composants/Collapse";
import {useNavigate} from 'react-router-dom';

function Home() {
    const [selectedImages, setSelectedImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();


    const handleCardClick = (pictures, index) => {
        const item = Data.find(item => item.pictures.includes(pictures[0]));
        if(!item){
            navigate("/not-found");
            return;
        }
        setSelectedImages(pictures);
        setCurrentIndex(0);
        setSelectedItem(item);
    };


    let content;
    if (selectedImages) {
        const currentItem = Data.find(item => item.pictures === selectedImages);
        const rating = parseInt(currentItem.rating, 10);
        content = (
            <div className="carousel-container">
                <Carousel images={selectedImages} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <div className="title-host">
                    <h2>{currentItem.title}</h2>
                    <div className="hostName-hostPicture">
                        <p className="hostName">{currentItem.host.name}</p>
                        <img className="hostPicture" src={currentItem.host.picture}></img>
                    </div>
                </div>
                <h4>{currentItem.location}</h4>
                <div className="tags-ratings">
                    <div className="tags">
                        {currentItem.tags.map((tag, index) => (
                            <span key={index} className="tag-bubble">{tag}</span>
                        ))}
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
                <Banner img={Background0} />
                <div className="card-container">
                    {Data.map((item, index) => (
                        <Card
                            key={index}
                            image={item.cover}
                            subtitle={item.title}
                            onClick={() => handleCardClick(item.pictures, index)}
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