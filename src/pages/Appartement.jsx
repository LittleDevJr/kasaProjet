
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apartmentsData from '../data/data.json';
import { FaStar } from 'react-icons/fa';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';

const Appartement = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const apartment = apartmentsData.find((apt) => apt.id === id);


    useEffect(() => {
        if (!apartment) {
            navigate('/not-found');
        }
    }, [apartment, navigate]);
    const rating = parseInt(apartment?.rating, 10);


    return (
        apartment ?
            <div className="carousel-container">
                <Carousel images={apartment.pictures} />
                <div className="infoCarousel">
                    <div className="title-location-tags">
                        <h2>{apartment.title}</h2>
                        <h4>{apartment.location}</h4>
                        <div className="tags">
                            {apartment.tags.map((tag, index) => (
                                <span key={index} className="tag-bubble">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="host-ratings">
                        <div className="hostName-hostPicture">
                            <p className="hostName">{apartment.host.name}</p>
                            <img className="hostPicture" src={apartment.host.picture}></img>
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
                    <div className="homeCollapseLeft">
                        <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Description">
                            {apartment.description}
                        </Collapse>
                    </div>
                    <div className="homeCollapseRight">
                        <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Equipements">
                            <ul> {apartment.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}

                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
            : null
    );
};

export default Appartement;
