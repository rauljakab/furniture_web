import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const AppNavbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (isMobile) {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className='fontMontserrat'>
                <Navbar.Brand as={Link} to="/" className='px-3'>Logo</Navbar.Brand>
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
            <Navbar style={{ height: 100, fontSize: 22, fontWeight: 400 }} bg="dark" variant="dark">
                <Navbar.Brand style={{ position: 'absolute', fontSize: 30, fontWeight: 600, left: '1rem', color: 'rgb(186, 140, 99)' }} as={Link} to="/">Masmenuiserie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center px-2'>
                    <Nav>
                        <Nav.Link style={{ color: 'rgb(186, 140, 99)' }} as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link style={{ color: 'rgb(186, 140, 99)' }} as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link style={{ color: 'rgb(186, 140, 99)' }} as={Link} to="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default AppNavbar;
