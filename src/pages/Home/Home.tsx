import { Link } from 'react-router-dom';
import GeoArt from '../../graphics/GeoArt';
import PageNav from '../../modules/PageNav';
import Follow from '../../modules/Follow';
import '../../css/theme.css';
import "../../css/Home.css";


const Home = () => {
    return (
        <div className="page u-pageContainer">
            <div className="page-card">
                <PageNav />

                <div className="hero-body">
                    <div className="hero-copy">
                        <h1 className="hero-title u-cursorText">Shreya<br />Reshamwala</h1>
                        <p className="hero-sub u-cursorText">
                            New York-based fullstack software engineer. I love to create and build &mdash; software,
                            math, and a little bit of art.
                        </p>
                        <Link className="page-cta u-pointer" to="/about-me">About Me</Link>

                        <Follow />
                    </div>

                    <GeoArt className="hero-art" />
                </div>
            </div>
        </div>
    );
}

export default Home;
