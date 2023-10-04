import Profile from '../images/car_rental.png'; 
// import Shopping_img from '../images/shopping_site.png';
import React_admin_panel from '../images/react_admin-panel.png';
import '../styles/portfolio.css';

const Protfolio = ()=>{
    return(
        <div className="portfolio" id="portfolio">
            <div className='container'>
                <div className='portfolio__content'>
                    <div className='portfolio__title'>
                        <h4>Portfolio</h4>
                        <h2>Frontend Portfolio</h2>
                    </div>
                    <div className="portfolio__boxes">
                        <div className="portfolio__box">
                            <a href="https://nandha-techie.github.io/car-rental/" target="__blank"><img src={Profile} alt="portfolio box" /></a>
                        </div>
                        <div className="portfolio__box">
                            <a href="https://nandha-techie.github.io/react-admin-panel/" target="__blank"><img src={React_admin_panel} alt="portfolio box" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Protfolio;