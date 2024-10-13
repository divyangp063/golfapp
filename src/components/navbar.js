import {Navbar, Nav, Container} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import './navbar.css';

export const NavbarComponent = () => {
    const location = useLocation();


    return (
        <Navbar bg="dark" variant="dark" expand='lg' className="custom-navbar">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="/home">GolfShopPro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                {/* Links to different pages */}
                <Nav className="ms-auto">
                <Nav.Link href="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Nav.Link>
                    <Nav.Link href="/home/aboutUs" className={location.pathname === '/home/aboutUs' ? 'active' : ''}>About Us</Nav.Link>
                    <Nav.Link href="/home/contactUs" className={location.pathname === '/home/contactUs' ? 'active' : ''}>Contact Us</Nav.Link>
                    <Nav.Link href="/home/myCart" className={location.pathname === '/home/myCart' ? 'active' : ''}>My Cart</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}