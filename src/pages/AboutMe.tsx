import React from 'react';
import NavBar from '../modules/NavBar';
import Footer from '../modules/Footer';
import "./AboutMe.css";



const name_header : string = 'My name is Shreya Reshamwala.';
const aboutMep1 : string = `I am a third-year student at the Massachusetts Institute of Technology. I am a double major--my primary major is electrical engineering and computer science, and my secondary major is pure mathematics. I also have a minor in German.`;
const aboutMep2: string = `I love to create and build. Software engineering and pure math in particular offer a lot of room for creativity in problem solving, and so I find myself enjoying my CS project and math classes the most. I’m driven by interesting problems and breaking the comfort zone, and so I like to pursue a variety of projects in different fields and learn new things along the way.`;
const aboutMep3: string = `My programming language of preference is Python; however, I am comfortable coding in C as well. I’m also familiar with JavaScript/TypeScript, SQL, and HTML/CSS.`;
const aboutMep4: string = `Outside of academics, I love following foreign policy, appreciating art (especially German abstract expressionism and Bauhaus, from which this site is inspired by), Lord of the Rings, spontaneity, and music.`;

document.body.style.backgroundColor = "#FFFCEF";


const AboutMe = () => {


    return (
        <div className='u-pageContainer'>
            <NavBar/>
            <div className = 'AboutMe-page'>
                <div className = 'AboutMe-text'>
                    <div className='u-textWrapper'><h3>{name_header}</h3></div>
                    <div className='u-textWrapper'><p>{aboutMep1}</p></div>
                    <div className='u-textWrapper'><p>{aboutMep2}</p></div>
                    <div className='u-textWrapper'><p>{aboutMep3}</p></div>
                    <div className='u-textWrapper'><p>{aboutMep4}</p></div>
                </div>
                <div className='AboutMe-img'>
                    <img src={'me.png'} alt='Stylized self-portrait'/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutMe;