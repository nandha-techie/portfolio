import { TypeAnimation } from 'react-type-animation';
import '../App.css';
import '../styles/hero.css';
import Profile from '../images/profile.png';

const Hero = ()=>{
    const roleText = ['', 2000, 'Frontend Developer'];


    return(
        <>
            <div className="hero-section" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-desc">
                            <h3>Hello, I'm</h3>
                            <h2>Nandhagopal Sekar</h2>
                            <TypeAnimation className="green-text"
                                sequence={roleText}
                                speed={30}
                                style={{ fontSize: '2rem'}}
                                deletionSpeed={1}
                                repeat={Infinity}
                            />
                            <p>I specialize in the creation UI development.</p>
                            <a href="#portfolio" className="portfolio-link">Portfolio</a>
                        </div>
                        <div className="hero-profile">
                            <img src={Profile} alt="profile dp"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;