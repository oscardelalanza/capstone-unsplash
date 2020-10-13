import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="gradient-color">
      The Gallery Pic
    </Navbar.Brand>
    <Nav className="mr-lg-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Project">Project</Nav.Link>
      <Nav.Link as={Link} to="/About">About</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavMenu;
