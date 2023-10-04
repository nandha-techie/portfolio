import { fadeInLeft } from 'react-animations';
import { fadeInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import JS from '../images/skills/js.png';
import Reactjs from '../images/skills/reactjs.png';
import Git from '../images/skills/git.png';
import Html5 from '../images/skills/html-5.png';
import Css3 from '../images/skills/css-3.png';
import Sass from '../images/skills/sass.png';
import Responsive from '../images/skills/responsive.png';
import Bootstrap from '../images/skills/bootstrap.png';
import SEO from '../images/skills/seo.png';
import '../styles/skill.css';

const Skill = ()=>{
    const leftStyle = StyleSheet.create({
        fade: {
          animationName: fadeInLeft,
          animationDuration: '5s'
        }
      })
      const rightStyle = StyleSheet.create({
        fade: {
          animationName: fadeInRight,
          animationDuration: '5s'
        }
      })
    
    return(
        <div className="skill-section" id="skill">
            <div className="container">
                <div className="skill-content">
                    <h4>Skills</h4>
                    <h3>My Skills</h3>
                    <div className="skill-boxes">
                        <div className={`skill-box ${css(leftStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={JS} alt="js" />
                            </div>    
                            <h3>Javascript</h3>
                        </div>
                        <div className='skill-box'>
                            <div className="skill__img">
                                <img src={Reactjs} alt="Reactjs" />
                            </div>    
                            <h3>Reactjs</h3>
                        </div>
                        <div className={`skill-box ${css(rightStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={Git} alt="Git" />
                            </div>    
                            <h3>Git</h3>
                        </div>
                        <div className={`skill-box ${css(leftStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={Html5} alt="html5" />
                            </div>
                            <h3>HTML5</h3>
                        </div>
                        <div className="skill-box">
                            <div className="skill__img">
                                <img src={Css3} alt="csss3" />
                            </div>
                            <h3>CSS3</h3>
                        </div>
                        <div className={`skill-box ${css(rightStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={Sass} alt="Sass" />
                            </div>
                            <h3>SASS</h3>
                        </div>
                        <div className={`skill-box ${css(leftStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={Bootstrap} alt="Bootstrap" />
                            </div>    
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="skill-box">
                            <div className="skill__img">
                                <img src={Responsive} alt="Responsive" />
                            </div>    
                            <h3>Responsive Design</h3>
                        </div>
                        <div className={`skill-box ${css(rightStyle.fade)} `}>
                            <div className="skill__img">
                                <img src={SEO} alt="SEO" />
                            </div>    
                            <h3>SEO Basic</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;