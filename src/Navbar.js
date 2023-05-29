import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from './images/logo/logoM.png';

const AppNavbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (isMobile) {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className='fontMontserrat'>
                <Navbar.Brand as={Link} to="/" className='px-1'>
                    <img src={logo} alt="Logo" style={{ height: 60 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto px-3 fontMontserrat" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    else {
        return (
            <Navbar fixed='top' style={{ height: 90, fontSize: 18, fontWeight: 400 }} bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/" className='px-3' style={{ position: 'absolute' }}>
                    <img src={logo} alt="Logo" style={{ height: 80 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center px-2'>
                    <Nav>
                        <Nav.Link style={{ color: 'rgb(251,218,50)' }} as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link style={{ color: 'rgb(251,218,50)' }} as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link style={{ color: 'rgb(251,218,50)' }} as={Link} to="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default AppNavbar;
