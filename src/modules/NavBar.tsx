import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import "../utils.css";

const NavBar = () => {
    return (
    <div className='NavBar-container'>
        <ul className='els'>
            <li className='u-inlineBlock'>
            <Link  className='nav-button u-link' to="/"><img src={'logo.png'} alt="icon"/></Link>
            </li>
            <li className='u-inlineBlock'>
                <Link  className='nav-button u-link' to="/">Home</Link>
            </li>
            <li className='u-inlineBlock'>
                <Link  className='nav-button u-link' to="../about-me">About Me</Link>
            </li>
            <li className='u-inlineBlock'>
                <Link className='nav-button u-link' to="../projects">Projects</Link>
            </li>
        </ul>
    </div>
    );
}

export default NavBar