import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../graphics/icons';
import '../css/theme.css';

const Follow = () => (
    <div className="page-follow">
        <span className="page-followLabel">Follow</span>
        <a className="page-icon u-pointer" href="https://github.com/shreyaresh" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
        </a>
        <a className="page-icon u-pointer" href="https://linkedin.com/in/shreyareshamwala/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
        </a>
        <a className="page-icon u-pointer" href="mailto:shreyaresh2020@gmail.com" aria-label="Email">
            <MailIcon />
        </a>
    </div>
);

export default Follow;
