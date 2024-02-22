import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiShoppingBag } from "react-icons/gi";
import '../Assests/CSS/Styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
import {useNavigate } from 'react-router-dom';

function Navbars() {
  const { username } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logout Successfully!");
    nav("/"); // Redirect to home page after logout
  };

  return (
    <>
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            E - Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{ fontSize: '1.2em' }}>Home</Nav.Link>
              <Nav.Link href="#features" style={{ fontSize: '1.2em' }}>Features</Nav.Link>
              <Nav.Link href="#pricing" style={{ fontSize: '1.2em' }}>Pricing</Nav.Link>
              <div id="ex4">
                <span
                  className="p1 fa-stack has-badge reduced-icon"
                  data-count={0}
                  style={{ cursor: 'pointer' }}
                >
                  <GiShoppingBag />
                </span>
              </div>
            </Nav>
            <NavDropdown title={username ? ` ${username}` : 'Guest'} id="basic-nav-dropdown">
              {username ? (
                <>
                  <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item href="/">Login</NavDropdown.Item>
              )}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars;
