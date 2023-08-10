import Profile from '../images/car_rental.png'; 
import Shopping_img from '../images/shopping_site.png';
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
                            <a href="https://nandha-techie.github.io/React-shoppingcard/" target="__blank"><img src={Shopping_img} alt="portfolio box" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Protfolio;