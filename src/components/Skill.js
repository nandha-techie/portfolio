import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import JS from '../images/skills/js.png';
import Reactjs from '../images/skills/reactjs.png';
import Git from '../images/skills/git.png';
import Html5 from '../images/skills/html-5.png';
import Css3 from '../images/skills/css-3.png';
import Sass from '../images/skills/sass.png';
import Responsive from '../images/skills/responsive.png';
import Bootstrap from '../images/skills/bootstrap.png';
import SEO from '../images/skills/seo.png';
import Opencart from '../images/skills/opencart.png';
import '../styles/skill.css';

const Skill = ()=>{
    
    return(
        <div className="skill-section" id="skill">
            <div className="container">
                <div className="skill-content">
                    <h4>Skills</h4>
                    <h3>My Skills</h3>
                    <div className="skill-boxes">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={false} delay={500}>
                            <div className={'skill-box' }>
                                <div className="skill__img">
                                    <img src={JS} alt="js" />
                                </div>    
                                <h3>Javascript</h3>
                            </div>
                        </AnimationOnScroll>    
                        <div className='skill-box'>
                            <div className="skill__img">
                                <img src={Reactjs} alt="Reactjs" />
                            </div>    
                            <h3>Reactjs</h3>
                        </div>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false} delay={500}>
                            <div className={'skill-box' }>

                                <div className="skill__img">
                                    <img src={Git} alt="Git" />
                                </div>    
                                <h3>Git</h3>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={false} delay={500}>
                            <div className={`skill-box `}>

                                <div className="skill__img">
                                    <img src={Html5} alt="html5" />
                                </div>
                                <h3>HTML5</h3>
                            </div>
                        </AnimationOnScroll>    
                        <div className="skill-box">
                            <div className="skill__img">
                                <img src={Css3} alt="csss3" />
                            </div>
                            <h3>CSS3</h3>
                        </div>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false} delay={500}>
                            <div className={`skill-box `}>

                                <div className="skill__img">
                                    <img src={Sass} alt="Sass" />
                                </div>
                                <h3>SASS</h3>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={false} delay={500}>
                            <div className={`skill-box `}>

                                <div className="skill__img">
                                    <img src={Bootstrap} alt="Bootstrap" />
                                </div>    
                                <h3>Bootstrap</h3>
                            </div>
                        </AnimationOnScroll>    
                            <div className="skill-box">
                                <div className="skill__img">
                                    <img src={Responsive} alt="Responsive" />
                                </div>    
                                <h3>Responsive Design</h3>
                            </div>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false} delay={500}>
                            <div className={`skill-box `}>

                                <div className="skill__img">
                                    <img src={SEO} alt="SEO" />
                                </div>    
                                <h3>SEO Basic</h3>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false} delay={500}>
                            <div className={`skill-box `}>

                                <div className="skill__img">
                                    <img src={Opencart} alt="opencart" />
                                </div>    
                                <h3>Opencart</h3>
                            </div>
                        </AnimationOnScroll>     
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;