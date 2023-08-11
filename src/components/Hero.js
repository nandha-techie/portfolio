import '../App.css';
import '../styles/hero.css';
import Profile from '../images/profile.png';

const Hero = ()=>{
    return(
        <>
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-desc">
                            <h3>Hello, I'm</h3>
                            <h2>Nandhagopal Sekar</h2>
                            <h4 className="green-text">Frontend Developer</h4>
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