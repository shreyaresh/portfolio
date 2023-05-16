import React from 'react';
import "./Footer.css";
import "../utils.css";
// import github from '../images/github.png';
// import linkedin from '../images/linkedin.png';
// import email from '../images/email.png';


const Footer = () => {
    return (
        <div className='Footer-container'>
        <ul className='footer-els'>
          <li className='u-inlineBlock'>
            <div className="imgResize">
              <a href="https://github.com/shreyaresh" target="_blank" rel="noreferrer">
                <img className='Image u-link' src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt="Github Link"></img>
              </a>
            </div>
          </li>
          <li className='u-inlineBlock'>
            <div className="imgResize">
              <a href="https://linkedin.com/in/shreyareshamwala/" target="_blank" rel="noreferrer">
                <img className='Image u-link' src={'https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png'} alt="LinkedIn Link"></img>
              </a>
            </div>
     
          </li>
          <li className='u-inlineBlock'>
            <div className="imgResize">
              <a href="mailto:shreyar@mit.edu" target="_blank" rel="noreferrer">
                <img className='Image u-link' src={'https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png'} alt="Email"></img>
              </a>
            </div>
          </li>
        </ul>
      </div>     
    );
}

export default Footer;