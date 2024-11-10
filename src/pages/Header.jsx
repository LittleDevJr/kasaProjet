import React from 'react';
import logo from '../assets/logoKasa.png';
import { NavLink } from 'react-router-dom';

function Header({ homeClick }) {
    return (
        <div className="entete">
            <img src={logo} alt="logo"></img>
            <nav className="navEntete">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={ homeClick }>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div >



    )
}

export default Header;