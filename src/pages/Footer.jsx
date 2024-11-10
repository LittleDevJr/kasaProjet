import React from 'react';
import logo from '../assets/LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
    <div className="piedPage">
        <img src={logo} alt="logo"></img>
        <div className="iconTexte">
        <FontAwesomeIcon icon={ faCopyright } />
        <p>Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer;