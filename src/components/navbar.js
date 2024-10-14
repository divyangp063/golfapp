import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './navbar.css';

export const NavbarComponent = ({ order }) => {
    const location = useLocation();

    const isCartEmpty = order?.buyQuantity?.every(quantity => quantity === 0);

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
                    <Nav.Link 
                        href="/home/myCart" 
                        className={location.pathname === '/home/myCart' ? 'active' : ''} 
                        disabled={isCartEmpty}
                    >
                        My Cart
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};