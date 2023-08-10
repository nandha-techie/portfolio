import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy'
import '../App.css';
import '../styles/home.css';
import '../styles/Navbar.css';
import React from 'react';


const Navbar = ()=>{
    const [open, setOpen] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const mobileMenu =()=>{
        setOpen(!open);
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return(
        <>
            <div className={`desktop-menu ${scrollPosition > 50 ? "fixed slide-in" : ""}`}>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <h1><a href="#home" alt="frontend">Frontend</a></h1>
                        </div>
                        <Scrollspy items={ ['home', 'skill', 'contact', 'portfolio'] } currentClassName="is-current" className="menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skill" >Skill</a></li>
                            <li><a href="#contact" >About</a></li>
                            <li><a href="#portfolio" >Portfolio</a></li>
                        </Scrollspy>
                        <div className="hamburger" onClick={mobileMenu }>
                            <FontAwesomeIcon icon={faBars} size="3x" />
                        </div>
                    </div>    
                </div>    
            </div>
            <div className={ `mobile-menu ${ open ? 'open-menu' : ''} `} >
                <div className='mobile-menu__content'>
                    <ul>
                        <li><a href="#home" onClick={mobileMenu }>Home</a></li>
                        <li><a href="#skill" onClick={mobileMenu }>Skill</a></li>
                        <li><a href="#contact" onClick={mobileMenu }>About</a></li>
                        <li><a href="#portfolio" onClick={mobileMenu }>Portfolio</a></li>
                    </ul>
                    <FontAwesomeIcon icon={faXmark} size="3x" className="close" onClick={mobileMenu }/>
                </div>
            </div>
        </>
    )
}

export default Navbar;