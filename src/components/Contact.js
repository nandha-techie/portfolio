import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Profile from '../images/profile.png';
import '../styles/contact.css';

const Contact = ()=>{
    return(
         <div className="contact-section" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact__details">
                        <h2>Contact</h2>
                        <div className="contact__list">
                            <FontAwesomeIcon icon={faPhone} className='icon_style'/>
                            <p>+91 8438234800</p>
                        </div>
                        <div className="contact__list">
                            <FontAwesomeIcon icon={faEnvelope} className='icon_style' />
                            <p>nandhawebapps@gmail.com</p>
                        </div>
                        <div className="contact__list">
                            <FontAwesomeIcon icon={faGithub} className='icon_style' />
                            <p><a href="https://nandha-techie.github.io/portfolio" target="__blank">github.com/nandha-techie</a></p>
                        </div>
                    </div>
                    <div className="aboutMe">
                        <h4>About Me</h4>
                        <h3>Get To Know Me</h3>
                        <div className='aboutMe__details'>
                            <img src={Profile} alt="aboutme" />
                            <p>A Frontend Developer with a comprehensive understanding of DOM. From translating design mockups into UI interactive pages, I create original and effective designs that take all project deliverables into account. Personal development is very important to me and I'm constantly improving my skills and knowledge to get the best results from every campaign. My meticulous attention to detail and ability to work within tight deadlines ensures I deliver projects on time, on budget, and on specification.</p>
                        </div>
                    </div>
                </div> 
            </div>
         </div>
    )
}

export default Contact;