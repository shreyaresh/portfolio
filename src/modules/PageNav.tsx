import React from 'react';
import { Link } from 'react-router-dom';
import '../css/theme.css';

const PageNav = () => (
    <nav className="page-nav">
        <Link className="page-navLink u-pointer" to="/">Home</Link>
        <Link className="page-navLink u-pointer" to="/about-me">About Me</Link>
        <Link className="page-navLink u-pointer" to="/projects">Projects</Link>
    </nav>
);

export default PageNav;
