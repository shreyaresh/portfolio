import React from 'react';
import NavBar from '../modules/NavBar';
import Footer from '../modules/Footer';
import "./Home.css";


const Home = () => {
    return (
        <div className='u-pageContainer home'>
            <div className='navbar-wrapper'>
                <NavBar />
            </div>
            <div className = 'Home-page'>
                <div className='Home-text'>
                    <h3 className='u-textWrapper'>Shreya Reshamwala</h3>
                    <h5 className='u-textWrapper'>Third year student at the Massachusetts Institute of Technology</h5>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;