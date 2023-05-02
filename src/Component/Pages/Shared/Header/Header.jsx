import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css';
import Activestyle from '../Active/Active';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white"className=''>
      <Container>
        <Navbar.Brand href="/"style={{color:"brown",fontSize:"35px",fontWeight:"bold"}}><i className="fa-solid fa-bowl-food"></i>Yumma</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"id="navbar2">
            <Activestyle to="/"active>Home</Activestyle>
            <Activestyle to="/Blog">Blog</Activestyle>
         

          </Nav>
          <Nav>
          <Button variant="secondary"className='me-2'>Profile</Button>
         <Button variant="info">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;