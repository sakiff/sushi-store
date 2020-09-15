import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {GiFishbone} from 'react-icons/gi'
import {Link} from "react-scroll";



function Navigation() {
    return (
        <>
            <Navbar className="nav container-fluid fixed-top navbarStyle" variant="dark">
                <Navbar.Brand href="#home"><GiFishbone className="navbar-icon"/></Navbar.Brand>
                <Nav className="mr-auto navItems">
                    <Link 
                        className="nav-link" to="menu" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}>Menu
                    </Link>
                    <Link
                        className="nav-link" 
                        to="about" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}>About Us
                    </Link>
                    <Link
                        className="nav-link" 
                        to="reservations"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}>Reservations</Link>
                    <Link className="nav-link" to="contact" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}>Contact</Link>
                </Nav>
                <Link className="navBtn " to="order" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-35}
                        duration={500}>Order Now</Link>
                
            </Navbar>     
        </>
    )
}
export default Navigation