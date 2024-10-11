import {Navbar, Nav, Container} from 'react-bootstrap';

export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Container>
                <Navbar.Brand href="/home">GolfShopPro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
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