import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css';
import Activestyle from '../Active/Active';
import { useContext } from 'react';
import { authdata } from '../../../AuthProvider/AuthProvider';
function Header() {
    const receivedata=useContext(authdata);
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white"className=''>
      <Container>
        <Navbar.Brand to="/"style={{color:"brown",fontSize:"35px",fontWeight:"bold"}}><i className="fa-solid fa-bowl-food"></i>Yumma</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"id="navbar2">
            <Activestyle to="/"active>Home</Activestyle>
            <Activestyle to="/Blog">Blog</Activestyle>
         

          </Nav>
          <Nav >
            <div className='d-flex justify-content-center align-items-center mx-auto'>
            <div>
            {
                receivedata.user && <img src={receivedata.user.photoURL} alt="profile_imag"className='rounded-circle me-2'style={{height:"40px",width:"40px"}}data-toggle="tooltip" data-placement="top" title={receivedata.user.displayName}/>
            }</div>
            <div>
         
          {
            receivedata.user?<button className='btn btn-primary'onClick={receivedata.signout}> Logout</button>: <button className='btn btn-primary'><Link to="/Login"className='text-decoration-none text-white'> Login</Link></button>
          }
        </div></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;