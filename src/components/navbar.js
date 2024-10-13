import {Navbar, Nav, Container} from 'react-bootstrap';
import './navbar.css';

export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand='lg' className="custom-navbar">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="/home">GolfShopPro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                {/* Links to different pages */}
                <Nav className="ms-auto">
                <Nav.Link href="/home" className="text-light">Home</Nav.Link>
                    <Nav.Link href="/home/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/home/contactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/home/myCart">My Cart</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}