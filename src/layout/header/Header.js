import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()

    return (
        <>
                <img src='./assets/image/technicalbuz_logo.png' alt='' className='mb-5 mt-3' width="220px" height="50px"/>
                {/* <div className='technicalbuz_nav'> */}
                    <Navbar className='technicalbuz_nav' collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" defaultActiveKey="#home">
                                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
                                <Link to="/quiz" className={location.pathname === "/quiz" ? "active" : ""}>Quiz</Link>
                            </Nav>
                                {/* <img src="./assets/image/search.png" alt="" height="100%" className='header-search'/> */}
                        </Navbar.Collapse>
                    </Navbar>
                {/* </div> */}
        </>
    )
}

export default Header