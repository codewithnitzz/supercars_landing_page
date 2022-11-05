import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaInstagram, FaFacebook } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [slide, setSlide] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        setSlide(!slide);
    }

    const handleClose = () => {
        setToggle(!toggle); // When we go from one link to other in mobile devices, then that time we have to remove this sidebar on clicking link.
        setSlide(!slide);
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>Race.</h3>
                </div>

                <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="maserati" spy={true} smooth={true} duration={500} >Maserati</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="toyota" spy={true} smooth={true} duration={500} >Toyota</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="ford" spy={true} smooth={true} duration={500} >Ford</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="mclaren" spy={true} smooth={true} duration={500} >Mclaren</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="chevrolet" spy={true} smooth={true} duration={500} >Chevrolet</Link></a></li>


                    <div className="mobile-menu">
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaInstagram className="icons" />
                            <FaFacebook className="icons" />
                            <GiCarWheel className="icons" />
                        </div>
                    </div>
                </ul>

                <ul className="nav-menu">
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Account</a></li>
                </ul>

                <div className="hamburger" onClick={handleToggle}>
                    {
                        toggle ? (<FaTimes size={20} style={{ "color": "#fff" }} />) : (<FaBars size={20} style={{ "color": "#fff" }} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar