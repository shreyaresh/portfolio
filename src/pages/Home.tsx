import React from 'react';
import NavBar from '../modules/NavBar';
import Footer from '../modules/Footer';
import "./Home.css";


const Home = () => {
    return (
        <div className='u-pageContainer'>
            <NavBar />
            <div className='Home-page'>
                <h3 className='Home-text'>
                    Shreya Reshamwala
                </h3>
            </div>
            <Footer />
        </div>
    );
}

export default Home;