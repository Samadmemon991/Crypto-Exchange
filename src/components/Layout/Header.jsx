import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  return (


    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Crypto Exchange</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#about-us">About Us </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
}
