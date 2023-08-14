import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skill from '../components/Skill';


const Home = ()=>{
    return(
        <div className="home-section">
            <Navbar />
            <Hero />
            <Skill />
            <Contact />
            <Experience />
            <Portfolio />
            <footer>
                <div className="container">
                    <p>Created by Nandhgopal © 2023</p>
                </div>
            </footer>
        </div>
        
    )
}
export default Home;