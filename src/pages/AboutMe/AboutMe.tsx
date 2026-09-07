import { name_header, aboutMe } from './constants';
import PageNav from '../../modules/PageNav';
import Follow from '../../modules/Follow';
import '../../css/theme.css';
import "../../css/AboutMe.css";

const AboutMe = () => {
    return (
        <div className="page about">
            <div className="page-card">
                <PageNav />

                <div className="about-body">
                    <div className="about-photo">
                        <div className="about-photoFrame">
                            <img src={'/me.png'} alt="Stylized self-portrait" />
                        </div>
                    </div>

                    <div className="about-copy">
                        <h1 className="about-title u-cursorText">{name_header}</h1>
                        {aboutMe.split('\n\n').map((paragraph) => (
                            <p className="u-cursorText" key={paragraph.slice(0, 32)}>{paragraph}</p>
                        ))}
                        <Follow />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
